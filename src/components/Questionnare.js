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
            isFinished : false,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(choice) {
        if(choice === this.state.dataSet[this.state.current].correct) {
            this.setState({correct : this.state.correct+1})
        } else {
            this.setState({incorrect : this.state.incorrect +1})
        }

        if(this.state.current === this.state.dataSet.length-1) {
            this.setState({ isFinished: true })
        } else {
            this.setState({ current: this.state.current +1 })
        }

    }

    render() {
        return (
            <div>
                <QuizArea correct={this.state.correct}
                          handleClick={this.handleClick}
                          isFinished={this.state.isFinished}
                          dataSet={this.state.dataSet[this.state.current]} >
                </QuizArea>
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} ></ScoreArea>
            </div>
            
        )
    }
}

export default Questionnare;
