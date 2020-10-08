import React from 'react'

function Answer(props) {
    return (
        <div>
            <button type="button" className="answerBtn" onClick={() => props.handleClick(props.choice)} >
                {props.answer}
            </button>
        </div>
    )
}

export default Answer
