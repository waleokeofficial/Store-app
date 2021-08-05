import React from 'react';
import LandingPageBg from '../Images/LandingPageBg.jpg';

const LandingPage =()=> {
    return(
        <div>
            <div className="LandingPage row">
                <div className="col-2">
                    <h1>Online Shopping <br></br> Made Easy</h1>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehender.
                    </div>
                    <button>Start Shopping</button>
                </div>
                <div className="col-2">
                    <img src={LandingPageBg} className="LandingPageBg" alt="Landing-page Background"></img>
                </div>
            </div>
        </div>
    )
}

export default LandingPage