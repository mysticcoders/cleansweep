import { useEffect, useState, useMemo } from 'react'

import { useNavigate } from 'react-router-dom'

import { HeaderContainer } from '../containers/HeaderContainer'
import { FooterContainer } from '../containers/FooterContainer'

import QuestionContainer from '../containers/QuestionContainer'
import DoneContainer from '../containers/DoneContainer'

import store from 'store'

import questions from '../constants/questions.json'

const QuizPage = () => {

  const navigate = useNavigate()

  const totalQuestions = questions.length

  const storedAnswers = store.get('answers')
  const initialAnswers = (storedAnswers && totalQuestions > storedAnswers.length) ? storedAnswers : []
  const initialQuestion = initialAnswers.length

  const [questionNumber, setQuestionNumber] = useState(initialQuestion)
  const [answers, setAnswers] = useState(initialAnswers)

  const categoryTotals = useMemo(() => {
    let totals = {}

    const uniqueCategories = questions.map(question => question.category)

    for(const uniqueCategory of uniqueCategories) {
      if(!Object.prototype.hasOwnProperty.call(totals, uniqueCategory)) {
        totals[uniqueCategory] = 0
      }

      totals[uniqueCategory] += 1
    }

    return totals
  }, [])

  const categoryAnswers = useMemo(() => {
    let catAns = {}

    const uniqueCategories = questions.map(question => question.category)

    let idx = 0
    for(const uniqueCategory of uniqueCategories) {
      if(!Object.prototype.hasOwnProperty.call(catAns, uniqueCategory)) {
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
    setAnswers(null)

    navigate('/start')
    store.remove('answers')
  }

  return (
    <div>
      <HeaderContainer startOver={startOver} />

      <section className="section">
        {!isDone() &&
        <>
          <QuestionContainer
            question={retrieveQuestion()}
            disabled={isDone()}
            questionNumber={questionNumber}
            totalQuestions={totalQuestions}
            answerQuestion={answerQuestion}
            score={score()}
          />

          <div className="columns is-centered">
            <div className="column is-8-desktop is-10-tablet is-full-mobile">
              <p className="has-text-centered mb-2">
                Question {questionNumber + 1} of {totalQuestions}
              </p>
              <progress className="progress is-link is-large" max={totalQuestions} value={questionNumber} />
            </div>
          </div>
        </>
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
      </section>
      <FooterContainer />
    </div>
  )
}

export default QuizPage
