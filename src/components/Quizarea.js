import React from 'react'
import Question from "./Question"
import AnswerList from "./AnswerList"
import UserGreeting from "./UserGreeting"

function Quizarea(props) {

    if(props.isFinished) {
        return <UserGreeting />
    }

    return (
        <div>
            <h2>Quiz Area</h2>
            <Question dataSet={props.dataSet} />
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
        </div>
    )
}

export default Quizarea
