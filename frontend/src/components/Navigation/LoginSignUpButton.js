import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function LoginSignUpButton() {
    const [showMenu, setShowMenu] = useState(false);


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    return (
        <div onClick={()=> openMenu()} className="dropdown">
            <button onClick={()=> openMenu()} className="link">
                Button
            </button>
            {showMenu&&(<div className="dropdown-menu dropdown-inside" >
                <div>
                    <div className="dropdown-links">
                        <NavLink to='/login'>Log In</NavLink>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </div>
                </div>
            </div>)}
        </div>
    );

}



export default LoginSignUpButton;
