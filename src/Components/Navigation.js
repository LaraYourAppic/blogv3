import './Navigation.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";

const Navigation = ({isAuth,toggleAuth}) => {
    const history = useHistory();

    function signout(){
        history.push('/')
        toggleAuth (false)
        console.log(isAuth)
    }

    return (
        <nav>
            <ul className='nav-bar'>
                <li>
                    <NavLink exact to="/" activeClassName="active-link">HomePage</NavLink>
                </li>
                <li>
                    {isAuth === false ? <NavLink to="/login" activeClassName="active-link" >Login</NavLink> : <button type='button' onClick={signout}>logout</button>}

                </li>
                <li>
                    {isAuth ? <NavLink to="/blog" activeClassName="active-link">Blog</NavLink> :""}
               </li>
            </ul>
        </nav>
    );
};

export default Navigation;