import React, { useState } from 'react'

export default function Add(props) {
    const { handle_add } = props
    const [text, setText] = useState("")
    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handle_add(text)
                        setText("")
                    }
                }}
            />
        </div>
    )
}
