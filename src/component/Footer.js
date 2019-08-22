import React, { Component } from 'react';
import '../CssComponent/footer.css'
class Footer extends Component {
    state = {}
    render() {
        return (
            <div className='footer'>
            <div className='footer1' >
                <p className='pFooter'>Privacy </p>
                <p className='pFooter'> Terms </p>
                <p className='pFooter'>  Contact </p>
                </div>
            <div>
                  <p className='pp'>
                  Copyright 2016, Original Trombones
                  </p>
                </div>
            
            </div>
         );
    }
}

export default Footer;