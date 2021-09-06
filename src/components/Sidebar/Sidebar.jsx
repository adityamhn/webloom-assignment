import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import './Sidebar.scss'
import { RiHome4Line, RiTeamLine, RiBriefcase2Line, RiCalendarTodoLine, RiSettingsLine } from 'react-icons/ri'
import { AiOutlineStock } from 'react-icons/ai'
import { CgLogOut } from 'react-icons/cg'


const Sidebar = () => {
    const location = useLocation()

    return (
        <Container className="sidebar-cont">
            <div className="sidebar-wrapper">
                <nav className="main-nav">
                    <div className="logo-sec">
                        <Image src={'/assets/images/logo.svg'} className="logo" alt="only1-logo" />
                    </div>
                    <NavLink to="/" className="nav-link" activeClassName={location.pathname === '/' ? "active-link" : null}><RiHome4Line className="icon" />Dashboard</NavLink>
                    <NavLink to="/teams" className="nav-link" activeClassName="active-link"><RiTeamLine className="icon" />My Team</NavLink>
                    <NavLink to="/task" className="nav-link" activeClassName="active-link"><RiBriefcase2Line className="icon" />Task</NavLink>
                    <NavLink to="/calender" className="nav-link" activeClassName="active-link"><RiCalendarTodoLine className="icon" />Calender</NavLink>
                    <NavLink to="/report" className="nav-link" activeClassName="active-link"><AiOutlineStock className="icon" />Report</NavLink>
                    <NavLink to="/settings" className="nav-link" activeClassName="active-link"><RiSettingsLine className="icon" />Settings</NavLink>
                </nav>
                <div className="logout-sec">
                    <Button className="logout"><CgLogOut className="icon" /> Logout</Button>
                </div>
            </div>
        </Container>
    )
}

export default Sidebar
