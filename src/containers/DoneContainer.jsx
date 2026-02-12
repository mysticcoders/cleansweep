import { useState } from 'react'

import numeral from "numeral"

import { CSVLink } from "react-csv"

export const DoneContainer = ({totalQuestions, questions, answers, score, categoryAnswers, categoryTotals}) => {

  const [selectedTab, setSelectedTab] = useState('overview')

  const csvData = [
    ["Yes", "No", "Question"],
  ]

  let questionIdx = 0
  for(const question of questions) {
    csvData.push([answers[questionIdx] ? 'X' : '', !answers[questionIdx] ? 'X' : '', question.question])
    questionIdx += 1
  }
  return (
    <>

      <h1 className="title has-text-centered">Survey complete</h1>

      <div className="columns is-centered">
        <div className="column is-8-desktop is-10-tablet is-full-mobile">

          <div className="tabs is-centered">
            <ul>
              <li className={selectedTab === 'overview' ? "is-active" : ""}>
                <a onClick={()=>{ setSelectedTab('overview')}}>Overview</a>
              </li>
              <li className={selectedTab === 'results' ? "is-active" : ""}>
                <a onClick={()=>{ setSelectedTab('results')}}>Results</a>
              </li>
            </ul>
          </div>

          { selectedTab === 'results' &&
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>Yes</th>
                  <th>No</th>
                  <th>Question</th>
                </tr>
              </thead>

              <tbody>
                {questions.map((question, idx) => (
                <tr key={idx} className={!answers[idx] ? "is-selected" : ""}>
                  <td>{answers[idx] ? 'X' : ''}</td>
                  <td>{!answers[idx] ? 'X' : ''}</td>
                  <td>{question.question}</td>
                </tr>
                ))}
              </tbody>
            </table>
          }

          { selectedTab === 'overview' &&
            <div className="box">
              <div className="content">
                <p>
                  Questions answered {totalQuestions}
                </p>

                <p className="has-text-weight-bold">
                  Final Score: {score}
                </p>

                <p>
                  Breakdown
                </p>

                <ul>
                  {Object.keys(categoryAnswers).map(category => (
                    <li key={category}>{category}: {categoryAnswers[category]} of {categoryTotals[category]}
                    &nbsp;
                    <span className="tag is-success">{numeral(categoryAnswers[category] / categoryTotals[category]).format('0%')}</span></li>
                  ))}
                </ul>

                <CSVLink data={csvData} filename="cleansweep.csv" className="button is-link">Download Results</CSVLink>
              </div>
            </div>
          }

        </div>
      </div>

    </>
  )
}

export default DoneContainer
