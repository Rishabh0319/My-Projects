import React, { useState } from 'react';
import LOGO from '../assets/google-logo.png';
import SearchInput from './SearchInput';
import ProfileIcons from './ProfileIcons';
import { menu } from '../utils/Constants';

const SearchReasultHeader = () => {

    const [selectedMenu, SetSelectedState] = useState('All');

    const clickHandler = (menu) => {
       console.log(menu);
       SetSelectedState(menu.name);
    }

    return (
        <div className='searchreasultheader-cont'>
            <div className='inner-div'>
                <div className='inner-div-child'>
                    <img className='SR-header-logo' src={LOGO} alt="" />
                    <SearchInput />
                </div>
                <div>
                    <ProfileIcons />
                </div>
            </div>
            <div className='SRH-menu'>
                {
                    menu.map((menu, index) => (
                        <span
                            className='menu-links'
                            key={index}
                            onClick={() => {clickHandler(menu)}}
                            style={{
                                color: (selectedMenu === menu.name) ? "#1a73e8" : "#5f6368",
                            }}
                        >

                            <span>{menu.icon}</span>
                            <span className='active-menu'>{menu.name}
                            {selectedMenu === menu.name && (
                                <span className='active-menu-underline'></span>
                            )}
                            </span>
                            
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchReasultHeader