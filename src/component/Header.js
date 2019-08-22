import React, { Component } from 'react';
import '../CssComponent/Header.css'
class Header extends Component {

    render() { 
        return ( 
            <div className='Header'>
                <div className='Header1'>
            <img className='Logo' src='OriginalTrombones.png' />
            </div>
            <div className='Header2'>
            <p className='menu'>Features</p>
            <p className='menu'>How It Works</p>
            <p className='menu'>Pricing</p>
            </div>
            </div>
         );
    }
}
 
export default Header;

