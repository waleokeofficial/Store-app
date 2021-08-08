import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


const Header = (props) => {
    const { cartItems } = props;

    return(
        <div>
            <header className="header row block">
                    <Link to="/" className="LINK"><h2><span>Peggy Store</span></h2></Link>
                <nav>
                    <Link to="/dashboard" className="LINK"><li><span> Dashboard </span></li></Link>
                    <Link to="/about" className="LINK"><li><span> About </span></li></Link>
                    <Link to="/cart" className="LINK"><li><span> Cart<span className="badge">{cartItems.length}</span> </span></li></Link>
                    <Link to="/signin" ><li><span> Sign In </span></li></Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;