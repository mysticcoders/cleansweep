import React from 'react'
import QuizPage from './QuizPage'
import StartPage from './StartPage'

import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { NotFoundPage } from './NotFoundPage'

const App = () => (
    <Switch>
        <Redirect exact from="/" to="/start" />

        <Route path="/quiz">
            <QuizPage />
        </Route>
        <Route path="/start">
            <StartPage />
        </Route>
        <Route>
            <NotFoundPage />
        </Route>
    </Switch>
)

export default App
