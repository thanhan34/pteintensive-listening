import React, { useEffect, useState } from 'react'
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from '@material-ui/icons/Menu';

function Header() {

    const [{ user, toggle }, dispatch] = useStateValue();


    const toggleMenu = () => {
        dispatch({
            type: "SET_TOGGLE",
            toggle: !toggle
        })
    }
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon onClick={toggleMenu} className="headerLeft_icon" />
                <p>PTE Intensive</p>
            </div>
            <div className="header__right">
                <Avatar alt={user?.display_name} src={user?.photoURL} />
                <h4>{user?.displayName}</h4>
            </div>
        </div>
    )
}

export default Header