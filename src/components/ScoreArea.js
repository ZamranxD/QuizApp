import React from 'react'
import TotalCorrent from "./TotalCorrent"
import TotalIncorrect from "./TotalIncorrect"

function ScoreArea(props) {
    return (
        <div className="scoreWrapper" >
            <TotalCorrent correct={props.correct} ></TotalCorrent>
            <TotalIncorrect incorrect={props.incorrect} ></TotalIncorrect>
        </div>
    )
}

export default ScoreArea
