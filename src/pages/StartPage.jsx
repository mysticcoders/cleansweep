import { useNavigate } from 'react-router-dom'

import { HeaderContainer } from '../containers/HeaderContainer'
import { FooterContainer } from '../containers/FooterContainer'

import store from 'store'

const StartPage = () => {

  const navigate = useNavigate()

  const startQuiz = () => {
    store.remove("answers")
    navigate('/quiz')
  }

  const hasQuizStarted = store.get("answers") ? true : false

  const startOver = () => {
    navigate('/start')
    store.remove('answers')
  }

  return (
    <>
      <HeaderContainer startOver={startOver} />

      <section className="section">
        <div className="columns is-centered">
          <div className="column is-8-desktop is-10-tablet is-full-mobile">
            <article className="message is-medium">
              <div className="message-header">
                <h2>CleanSweep Instructions</h2>
              </div>
              <div className="message-body">

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

                <div className="columns is-centered mt-4">
                  { hasQuizStarted &&
                    <div className="column is-narrow">
                      <button className="button is-primary is-fullwidth" onClick={() => { navigate('/quiz') }}>Continue</button>
                    </div>
                  }
                  <div className="column is-narrow">
                    <button className="button is-success is-fullwidth" onClick={() => { startQuiz() }}>Start</button>
                  </div>
                </div>

              </div>
            </article>
          </div>
        </div>
      </section>

      <FooterContainer />
    </>
  )
}

export default StartPage
