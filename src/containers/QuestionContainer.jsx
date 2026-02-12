export const QuestionContainer = ({question, questionNumber, totalQuestions, answerQuestion, disabled}) => {

  return (
    <>

      <h1 className="title has-text-centered">{question.category}</h1>

      <div className="columns is-centered">
        <div className="column is-8-desktop is-10-tablet is-full-mobile">
          <div className="box">
            <div className="content">
              <p>
                {question.question}
              </p>

              <div className="columns is-mobile is-centered">
                <div className="column has-text-centered">
                  <button className="button is-success is-large is-fullwidth" disabled={ questionNumber - 1 === totalQuestions } onClick={() => answerQuestion(true)}>Yes</button>
                </div>
                <div className="column has-text-centered">
                  <button className="button is-danger is-large is-fullwidth" disabled={ disabled } onClick={() => answerQuestion(false)}>No</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default QuestionContainer
