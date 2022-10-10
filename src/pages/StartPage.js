import React from 'react'

import { useHistory } from 'react-router'

import { HeaderContainer } from '../containers/HeaderContainer'
import { FooterContainer } from '../containers/FooterContainer'

import { Message, Section, Column, Button } from 'rbx'

import store from 'store'

const StartPage = () => {

    const history = useHistory()

    const startQuiz = () => {
        store.remove("answers")
        history.push('/quiz')        
    }

    const hasQuizStarted = store.get("answers") ? true : false

    const startOver = () => {
        history.push('/start')
        store.remove('answers')        
    }

    const ContinueButton = (hasQuizStarted) => (
        <>
        { hasQuizStarted &&
            <Column>
                <Button color="primary" onClick={() => { history.push('/quiz') }}>Continue</Button>
            </Column>
        }
        </>
    )

    return (
        <>
            <HeaderContainer startOver={startOver} />

            <Section>
                <Column.Group centered={true}>
                    <Column size="half">
                        <Message size='medium'>
                            <Message.Header>
                                <h2>CleanSweep Instructions</h2>
                            </Message.Header>
                            <Message.Body>

                                <p>
                                    Prior to taking the quiz, please note that the 100 questions that are ahead should be thought about a little differently.
                                    Every Yes will add to your total, but the goal should not be to &quot;reach 100&quot;. The tool is best utilized as a guide post for 
                                    items that you&apos;d seek to pay more attention to in life.
                                    <br /><br />
                                </p>
                                <p> Any &quot;No&quot; you get, is not a failure, only an option for you to look
                                    further and identify some areas you can look at, or not. The last page will offer an overview and marking of what you&apos;ve 
                                    said No to, and you can download the results. <br /><br />If you&apos;ve gotten something out of this, take it again next year.
                                </p>

                                <br />
                                <Column.Group align="center">
                                    <ContinueButton hasQuizStarted={hasQuizStarted} />
                                    <Column>
                                        <Button color="success" onClick={() => { startQuiz() }}>Start</Button>                                        
                                    </Column>
                                </Column.Group>

                            </Message.Body>
                        </Message>
                    </Column>
                </Column.Group>
            </Section>

            <FooterContainer />
        </>
    )
}

export default StartPage