import React from 'react'
import "./Header.css";
// import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
function Header() {
    // const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className="header__right">
                {/* <Avatar alt={user?.display_name} src={user?.images[0].url} /> */}
                <Avatar src="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/71083781_10214932870304025_3054890081639727104_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=KGOLyN-fNKgAX-_nKpL&_nc_ht=scontent.fbne6-1.fna&oh=964c66c0ab1e083a4028532d2a656622&oe=5FCAB1F0" />
                {/* <h4>{user?.display_name}</h4> */}
                <h4>An Doan</h4>
            </div>
        </div>
    )
}

export default Header