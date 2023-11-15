import React from 'react';
import {IoBulbOutline} from 'react-icons/io5'
import {MdRssFeed} from 'react-icons/md'

function MainRight() {
  return (
    <div className='mainRight'>
      <div className='mainRightContainer'>
        <div className="mainRightText">
          <h2>Following</h2>
          <h2>For you</h2>
        </div>

        <div className="lineTwo" />

        <div className="box">
          <h2>Welcome...This is GitHub clone with ReactJs, Sass, and React Router.</h2>
          <p>Follow me on <span>Twitter</span></p>
          <button className="btn">
            <a href="#">GitHub Clone</a>
          </button>
        </div>

        <div className="boxCenter">
          <div className="boxCenterFirst">
            <IoBulbOutline />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="boxCenterFirst">
            <MdRssFeed />
            <p>Follow to stay updated</p>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footerFirst">
            <img src="/src/img/tihanapic.png" alt="" />
            <h4>GitHub Clone</h4>
          </div>
          <div className="footerSecond">
            <div className="footerSecondInside">
              <h4>Blog</h4>
              <h4>About</h4>
              <h4>Shop</h4>
              <h4>GitHub Clone</h4>
              <h4>Pricing</h4>
            </div>
            <div className="footerSecondInside">
              <h4>Terms</h4>
              <h4>Privacy</h4>
              <h4>Docs</h4>
            </div>
          </div>
        </div>
        <div className="lineTwo" />
      </div>
    </div>
  );
}

export default MainRight;
