import React from 'react';

import "./Example.css";

const Example = () => {
  return (
    <div className="body">
        <div className="container">
           <img className="container__image" src={process.env.PUBLIC_URL + '/assets/google.png'}></img>
            <div className="container__text">
                <h4>Google</h4>
                <p>1515 USD</p>
            </div>
        </div>
        <div className="container1">
           <img className="container__image" src={process.env.PUBLIC_URL + '/assets/FB.png'}></img>
            <div className="container__text">
                <h4>Facebook</h4>
                <p>266 USD</p>
            </div>
        </div>
        <div className="container2">
           <img className="container__image" src={process.env.PUBLIC_URL + '/assets/amazon.svg'}></img>
            <div className="container__text">
                <h4>Amazon</h4>
                <p>3116 USD</p>
            </div>
        </div>

    </div> 

          
  );
};

export default Example;