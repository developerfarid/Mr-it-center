
import { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Appber from './components/Appber/Appber';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ItemCourse from './components/ItemCourse/ItemCourse';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service';

export const courseContext= createContext()

function App() {
  const [service, setService] = useState([])
    useEffect(() => {
        fetch("./fakeData.json").then(res=> res.json()).then(data=> setService(data))
    }, [])
  return (
    <courseContext.Provider value={service}>
      <Router>
        <Appber></Appber>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/course/:id">
            <ItemCourse></ItemCourse>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </courseContext.Provider>
  );
}

export default App;
