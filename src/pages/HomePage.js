import React, { useState, useEffect } from 'react'


import { HeaderContainer } from '../containers/HeaderContainer'
import { FooterContainer } from '../containers/FooterContainer'

import QuestionContainer from '../containers/QuestionContainer'
import DoneContainer from '../containers/DoneContainer'

import { Section, Progress } from 'rbx'

const questions = require('../constants/questions.json')

export const HomePage = () => {

    const totalQuestions = questions.length

    const [questionNumber, setQuestionNumber] = useState(0)
    const [answers, setAnswers] = useState([])

    const [categoryAnswers, setCategoryAnswers] = useState({})

    const retrieveQuestion = () => {
        if(!isDone()) {
            return questions[questionNumber]
        } else {
            return null
        }
    }

    const answerQuestion = (yes) => {
        const question = retrieveQuestion()

        let newCategoryAnswers = categoryAnswers
        if(!newCategoryAnswers.hasOwnProperty(question.category)) {
            newCategoryAnswers[question.category] = 0
        }

        if(yes) {
            newCategoryAnswers[question.category] += 1
        }

        setCategoryAnswers(newCategoryAnswers)
        setAnswers(answers => answers.concat([yes]))
        setQuestionNumber(questionNumber + 1)
    }

    const score = () => {
        if(answers.length === 0) return 0

        return answers.map(answer => answer ? 1 : 0).reduce((total, current) => total + current)
    }

    const isDone = () => {
        return questionNumber === totalQuestions
    }

    return (
        <div>
            <HeaderContainer />
            
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
                    />

                }
                </Section>            
            <FooterContainer />
        </div>
    )
}

export default HomePage