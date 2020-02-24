import React from 'react'

import { useHistory } from "react-router-dom"

import { Navbar, Button } from "rbx"

import CleanSweepLogo from '../images/cleansweep-logo.png'

export const HeaderContainer = ({activeItem, startOver}) => {
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
            <Navbar.Menu>
                <Navbar.Segment align="end">
                <Navbar.Item>
                    <Button color="danger" onClick={() => { startOver() }}>
                        <strong>Start Over</strong>
                    </Button>
                </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    )

}