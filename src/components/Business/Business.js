import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    const business = this.props.business;
    const googleMapsUrl = `https://maps.google.com/?q=${business.displayAddress[0]}, ${business.displayAddress[1]}`;
    return (
      <div className='Business'>
        <a href={business.url} target='blank' className='image-container'>
          <img src={business.imageSrc} alt='' />
        </a>
        <h2>{business.name}</h2>
        <div className='Business-information'>
          <a href={googleMapsUrl} target='blank' className='Business-address'>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.zipCode}</p>
          </a>
          <div className='Business-reviews'>
            <h3>{business.category}</h3>
            <h3 className='rating'>{business.rating}</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
