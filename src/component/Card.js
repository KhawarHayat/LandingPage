import React, { Component } from 'react';
import '../CssComponent/Card.css'
class Cards extends Component {
    state = {}
    render() {
        return (
            <div className='containerCard'>
                <div className='card'>
                    <center>
                        <p className='head p'>TENOR TROMBONE</p>
                        <p className='price p'>$600</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <button className='button'>SELECT</button>
                    </center>
                </div>


                {/* Second Card */}

                <div className='card'>
                    <center>
                        <p className='head p'>BASS TROMBONE</p>
                        <p className='price p'>$900</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <button className='button'>SELECT</button>
                    </center>
                </div>

                <div className='card'>
                    <center>
                        <p className='head p'>VALVE TROMBONE</p>
                        <p className='price p'>$1200</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <p className='cardInfo p'>Lorem ipsum.</p>
                        <button className='button'>SELECT</button>
                    </center>
                </div>
                
            </div>
        );
    }
}

export default Cards;