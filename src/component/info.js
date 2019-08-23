import React, { Component } from 'react';
import '../CssComponent/info.css'
class info extends Component {
    state = {}
    render() {
        return (
            <div className='container'>
                <div className='info'>
                    <img className='one logo' src='Premium.png' />
                    <div className='six expl'>
                        <p><span className='bold'>Premium Material</span><br />
                            Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
                    </div>
                </div>

                <div className='info'>
                    <img className='one logo' src='Fast.png' />
                    <div className='six expl'>
                        <p ><span className='bold'>Fast Shipping</span><br />
                            We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
                    </div>
                </div>

                <div className='info'>
                    <img className='one logo' src='Quality.png' />
                    <div className='six expl'>
                        <p ><span className='bold'>Quality Assurance</span><br />
                            For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
                    </div>
                </div>
                <br/>
                <br/>
                <center><iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                </center>
            </div>
        );
    }
}

export default info;