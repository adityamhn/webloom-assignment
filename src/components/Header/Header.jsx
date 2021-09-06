import React, { useRef } from 'react'
import { Container, Dropdown, FormControl, Image } from 'react-bootstrap'
import './Header.scss'
import { FiSearch } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Header = ({ title }) => {
    const searchboxRef = useRef()
    return (
        <Container fluid className="header-cont">
            <div className="header-wrapper">
                <h1 className="title">{title}</h1>
                <div className="header-end">
                    <div className="search-sec">
                        <FiSearch className="icon" onClick={() => searchboxRef.current.focus()} />
                        <FormControl ref={searchboxRef} className="input-field" />
                    </div>
                    <Dropdown className="noti-sec">
                        <Dropdown.Toggle className="noti-toggle" variant="success" id="dropdown-basic">
                            <IoMdNotificationsOutline className="icon" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Notification 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Notification 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Notification 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="profile-sec">
                        <Dropdown.Toggle className="prof-toggle" variant="success" id="dropdown-basic">
                            <Image src={'/assets/images/defaultProfile.svg'} className="prof-img" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </Container>
    )
}

export default Header
