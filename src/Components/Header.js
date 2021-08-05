import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


const Header = () => {

    return(
        <div>
            <header className="header row block">
                {/* <Router> */}
                    <h2>Radiant Store</h2>
                    <div>
                        <span>Home</span>

                        <Link to="/about" className="LINK">
                            About
                        </Link>

                        <span>Cart</span>

                        <Link to="/signin"  className="LINK">
                            Sign In
                        </Link>
                    </div>
                {/* </Router> */}
            </header>
        </div>
    )
}

export default Header;