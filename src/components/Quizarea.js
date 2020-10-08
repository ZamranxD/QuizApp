import React from 'react'
import Question from "./Question"
import AnswerList from "./AnswerList"
import UserGreeting from "./UserGreeting"

function Quizarea() {
    return (
        <div>
            <h2>Quiz Area</h2>
            <Question />
            <AnswerList />
            <UserGreeting />
        </div>
    )
}

export default Quizarea
