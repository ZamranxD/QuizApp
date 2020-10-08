import React from 'react'
import TotalCorrent from "./TotalCorrent"
import TotalIncorrect from "./TotalIncorrect"

function ScoreArea() {
    return (
        <div>
            <h2>
                Score Area
            </h2>
            <TotalCorrent></TotalCorrent>
            <TotalIncorrect></TotalIncorrect>
        </div>
    )
}

export default ScoreArea
