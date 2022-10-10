import React, { useState }  from 'react'

import { Content, Box, Title, Tag, Tab, Table } from "rbx"

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
        <React.Fragment>

            <Title>Survey complete</Title>

            <Tab.Group align="centered">
                <Tab active={selectedTab === 'overview'} onClick={()=>{ setSelectedTab('overview')}}>Overview</Tab>
                <Tab active={selectedTab === 'results'} onClick={()=>{ setSelectedTab('results')}}>Results</Tab>
            </Tab.Group>

            { selectedTab === 'results' &&
                <Table striped fullwidth>
                    <Table.Head>
                        <Table.Row>
                            <Table.Heading>Yes</Table.Heading>
                            <Table.Heading>No</Table.Heading>
                            <Table.Heading>Question</Table.Heading>
                        </Table.Row>
                    </Table.Head>     

                    <Table.Body>
                        {questions.map((question, idx) => (
                        <Table.Row key={idx} selected={!answers[idx]}>
                            <Table.Cell>{answers[idx] ? 'X' : ''}</Table.Cell>
                            <Table.Cell>{!answers[idx] ? 'X' : ''}</Table.Cell>
                            <Table.Cell>{question.question}</Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>                           
                </Table>
            }

            { selectedTab === 'overview' &&
                <Box>
                    <Content>
                        <p>
                            Questions answered {totalQuestions}
                        </p>

                        <p>
                            Final Score: {score}
                        </p>

                        <p>
                            Breakdown
                        </p>

                        <ul>
                            {Object.keys(categoryAnswers).map(category => (
                                <li key={category}>{category}: {categoryAnswers[category]} of {categoryTotals[category]}
                                &nbsp;
                                <Tag color="success">{numeral(categoryAnswers[category] / categoryTotals[category]).format('0%')}</Tag></li>
                            ))}
                        </ul>

                        <CSVLink data={csvData} filename="cleansweep.csv">Download Results</CSVLink>
                    </Content>
                </Box>
            }

        </React.Fragment>        
    )
}

export default DoneContainer