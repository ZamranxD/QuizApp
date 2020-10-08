import React, { Fragment } from 'react'
import Question from "./Question"
import AnswerList from "./AnswerList"
import UserGreeting from "./UserGreeting"
import Passed from "./Passed"
import Failed from "./Failed"

function Quizarea(props) {

    if(props.isFinished && props.correct>=2) {
        return(
            <Fragment>
                <UserGreeting />
                <Passed />
            </Fragment>
        );
    } else if(props.isFinished &&props.correct<2) {
        return(
            <Fragment>
                <UserGreeting />
                <Failed />
            </Fragment>
        )
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
