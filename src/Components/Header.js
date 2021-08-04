import React from 'react';

const Header = () => {

    return(
        <div>
            <header className="header row block">
                <h2>Radiant Store</h2>
                <div>
                    <a>Cart</a><a onClick={()=> alert("Sign In")}>Sign In</a>
                </div>
            </header>
        </div>
    )
}

export default Header;