import React, { Suspense } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router'
import { Loader } from '../Loader'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
    return (
        <div>
            <Sidebar />
            <Container fluid className="layout-wrapper" style={{
                paddingRight: 0,
                paddingLeft: "230px",
            }}>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>

            </Container>
        </div>
    )
}

export default Layout
