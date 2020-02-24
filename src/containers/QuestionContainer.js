import React from 'react'

import { Content, Box, Title, Button, Column } from "rbx"

export const QuestionContainer = ({question, questionNumber, totalQuestions, answerQuestion, disabled}) => {

    return (
        <React.Fragment>

            <Title>{question.category}</Title>

            <Column.Group>            
                <Column size="half" offset="one-quarter">
                    <Box>
                        <Content>
                            <p>
                                {question.question}
                            </p>

                            <Column.Group breakpoint="mobile">
                                <Column>
                                    <Button size="large" color="success" disabled={ questionNumber - 1 === totalQuestions } onClick={() => answerQuestion(true)}>Yes</Button>
                                </Column>
                                <Column>
                                    <Button size="large" color="danger" disabled={ disabled } onClick={() => answerQuestion(false)}>No</Button>
                                </Column>
                            </Column.Group>
                        </Content>
                    </Box>

                </Column>
            </Column.Group>

        </React.Fragment>        
    )
}

export default QuestionContainer