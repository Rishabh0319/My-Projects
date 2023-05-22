import React from 'react';
import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <div className='footer-cont'>
      <div className="row-1">
        <span>India</span>
      </div>
      <div className="row-2">
        <div>
          {
            quickLinks.map((menu, index) => (
              <span
                key={index}
              >
                {menu}
              </span>
            ))
          }
        </div>
        <div>
          {
            settingMenu.map((menu, index) => (
              <span
                key={index}
              >
                {menu}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer