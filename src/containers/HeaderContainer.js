import React from 'react'

import { useHistory } from "react-router-dom"

import { Navbar, Button } from "rbx"

import CleanSweepLogo from '../images/cleansweep-logo.png'

import store from 'store'

export const HeaderContainer = ({startOver}) => {
    const history = useHistory()
   
    const hasQuizStarted = store.get("answers") ? true : false

    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item onClick={() => { history.push('/') }}>
                    <img src={CleanSweepLogo}
                        alt="Clean Sweep" role="presentation"
                        width="184" height="32"
                    />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            { hasQuizStarted &&
                <Navbar.Menu>
                    <Navbar.Segment align="end">
                    <Navbar.Item>
                        <Button color="danger" onClick={() => { startOver() }}>
                            <strong>Start Over</strong>
                        </Button>
                    </Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            }
        </Navbar>
    )
}

export default HeaderContainer