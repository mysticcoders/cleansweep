import React, { useEffect, useState, useMemo } from 'react'


import { HeaderContainer } from '../containers/HeaderContainer'
import { FooterContainer } from '../containers/FooterContainer'

import QuestionContainer from '../containers/QuestionContainer'
import DoneContainer from '../containers/DoneContainer'

import { Section, Progress } from 'rbx'

import store from 'store'

const questions = require('../constants/questions.json')

export const HomePage = () => {

    const totalQuestions = questions.length
    
    const [questionNumber, setQuestionNumber] = useState(0)
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        let storedAnswers = store.get('answers')

        if(storedAnswers && totalQuestions > storedAnswers.length) {
            setQuestionNumber(storedAnswers.length)
            setAnswers(storedAnswers)
        }
    }, [])

    const categoryTotals = useMemo(() => {
        let totals = {}

        const uniqueCategories = questions.map(question => question.category)

        for(const uniqueCategory of uniqueCategories) {
            if(!totals.hasOwnProperty(uniqueCategory)) {
                totals[uniqueCategory] = 0
            }
    
            totals[uniqueCategory] += 1
        }

        return totals
    }, []);

    const categoryAnswers = useMemo(() => {
        let catAns = {}

        const uniqueCategories = questions.map(question => question.category)

        let idx = 0
        for(const uniqueCategory of uniqueCategories) {
            if(!catAns.hasOwnProperty(uniqueCategory)) {
                catAns[uniqueCategory] = 0
            }

            if(answers[idx]) {
                catAns[uniqueCategory] += 1
            }

            idx += 1
        }

        return catAns
    }, [answers])
    
    const retrieveQuestion = () => {
        return !isDone() ? questions[questionNumber] : null
    }

    const answerQuestion = (yes) => {
        setAnswers(answers => answers.concat([yes]))
        setQuestionNumber(questionNumber + 1)
    }

    useEffect(() => {
        store.set('answers', answers)
    }, [answers])

    const score = () => {
        if(answers.length === 0) return 0

        return answers.map(answer => answer ? 1 : 0).reduce((total, current) => total + current)
    }

    const isDone = () => {
        return questionNumber === totalQuestions
    }

    const startOver = () => {
        setQuestionNumber(0)
        setAnswers([])

        store.remove('answers')
    }

    return (
        <div>
            <HeaderContainer startOver={startOver} />
            
            <Section>
                {!isDone() &&
                <React.Fragment>
                    <QuestionContainer 
                    
                        question={retrieveQuestion()}
                        disabled={isDone()}
                        questionNumber={questionNumber}
                        totalQuestions={totalQuestions}
                        answerQuestion={answerQuestion}
                        score={score()}
                    />

                    <Progress color="link" max={100} value={questionNumber} size="large" />
                </React.Fragment>
                }

                {isDone() &&
                    <DoneContainer                             
                        totalQuestions={totalQuestions}
                        score={score()}
                        categoryAnswers={categoryAnswers}
                        categoryTotals={categoryTotals}
                        questions={questions}
                        answers={answers}
                    />

                }
                </Section>            
            <FooterContainer />
        </div>
    )
}

export default HomePage