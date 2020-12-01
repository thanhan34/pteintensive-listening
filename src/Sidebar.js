import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MenuIcon from '@material-ui/icons/Menu';
import { useStateValue } from './StateProvider';
import logo from './images/logo.jpg'
function Sidebar() {
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src={logo} alt="" />
            <SidebarOption title="Home" Icon={HomeIcon} path="" />
            <SidebarOption title="Search" Icon={SearchIcon} path="" />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} path="" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            <SidebarOption title="Repeat Sentence" path="rs" />
            <SidebarOption title="Answer Short Question" path="asq" />
            <SidebarOption title="Write From Dictation" path="wfd" />

        </div>
    )
}

export default Sidebar
