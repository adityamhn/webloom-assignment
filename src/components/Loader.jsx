import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100" style={{
            height: '100vh'
        }}>
            <Spinner animation="border" />
        </div>
    )
}
