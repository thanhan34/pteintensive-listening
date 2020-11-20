import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarOption.css'
function SidebarOption({ title, Icon, path }) {
    return (
        <Link className="sidebarOption" to={`/${path}`}>
            {
                Icon && <Icon className="sidebarOption__icon" />
            }
            {
                Icon ? <h4>{title}</h4> : <p>{title}</p>
            }
        </Link>
    )
}

export default SidebarOption
