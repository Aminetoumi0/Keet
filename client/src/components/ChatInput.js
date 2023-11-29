import { useState } from "react"

const ChatInput = () => {
    const [textArea, settextArea] = useState(null)
    return (
        <div className="chat-input">
            <textarea value={textArea} onChange={(e) => settextArea(e.target.value)}/>
            <button className="secondary-button">Submit</button>
       
        </div>
        
    )
}

export default ChatInput