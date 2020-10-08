import React from 'react'

function Answer(props) {
    return (
        <div>
            <button type="button">
                {props.answer}
            </button>
        </div>
    )
}

export default Answer
