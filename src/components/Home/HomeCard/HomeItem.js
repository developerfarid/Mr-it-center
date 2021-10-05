import React from 'react';

const HomeItem = ({img, title, para}) => {
    return (
        <div className='card h-100 mb-3'>
        <div className='row g-0'>
          <div className='col-md-2 pt-4 ps-4'>
            <img
              src={img}
              className='img-fluid rounded-start'
              alt='...'
            />
          </div>
          <div className='col-md-10'>
            <div className='card-body'>
              <h5 className='card-title'>{title }</h5>
              <p className='card-text'>
               {para}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeItem;