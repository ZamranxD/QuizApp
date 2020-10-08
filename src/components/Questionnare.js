import React, { Component } from 'react'
import dataSet from "../api/dataSet"
import QuizArea from "./Quizarea"
import ScoreArea from "./ScoreArea"

export class Questionnare extends Component {

    constructor() {
        super();
        this.state = {
            current : 0,
            dataSet : dataSet,
            correct : 0,
            incorrect : 0,
            isFinished : false
        }
    }

    render() {
        return (
            <div>
                <QuizArea></QuizArea>
                <ScoreArea></ScoreArea>
            </div>
        )
    }
}

export default Questionnare;
