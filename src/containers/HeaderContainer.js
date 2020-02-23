import React from 'react'

import { useHistory } from "react-router-dom"

import { Navbar } from "rbx"

import CleanSweepLogo from '../images/cleansweep-logo.png'

export const HeaderContainer = ({activeItem}) => {
    const history = useHistory()
   
    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item onClick={() => { history.push('/') }}>
                    <img
                        src={CleanSweepLogo}
                        alt=""
                        role="presentation"
                        width="184"
                        height="32"
                    />                    
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
        </Navbar>
    )

}