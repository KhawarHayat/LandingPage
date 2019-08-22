import React, { Component } from 'react';
import '../CssComponent/Body.css'
class Body extends Component {
    state = {}
    render() {
        return (
            <div>
                <center><h2 className='heading'>Handcrafted, home-made masterpieces</h2>
                    <input
                        className='input'
                        type='email'
                        name='email'
                        placeholder='Enter your email address'
                    />
                    <br />
                    <button className='button' type='submit'>Get Started</button>
                </center>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Body;
