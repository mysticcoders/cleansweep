import React from 'react'

import { Section, Content, Box, Title } from "rbx"

export const DoneContainer = ({totalQuestions, score, categoryAnswers}) => {

    return (
        <React.Fragment>

            <Title>Survey complete</Title>

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

                        <ul>
                            {Object.keys(categoryAnswers).map(category => (
                                <li key={category}>{category}: {categoryAnswers[category]}</li>
                            ))}
                        </ul>
                    </p>
                </Content>
            </Box>

        </React.Fragment>        
    )
}

export default DoneContainer