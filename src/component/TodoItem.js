import { useState } from "react"
import { deleteJob, toggleJob, editJob, endEditJob } from "../include/action"

function TodoItem({ index, todo, dispatch, editIndex }) {

    const [isSubmited, setIsSubmited] = useState(false)
    const [input, setInput] = useState(todo.title)

    const handleOnKeyUp = (payload) => {
        dispatch(endEditJob(payload))
        setIsSubmited(true)
    }

    const handleOnBlur = (payload) => {
        if (!isSubmited) {
            dispatch(endEditJob(payload))
        }
        setIsSubmited(false)
    }

    return (
        <li 
            className={`${todo.completed ? "completed" : ""} ${editIndex === index ? "editing" : ""}`}
        >
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleJob(index))}
                />
                <label
                    onDoubleClick={() => dispatch(editJob(index))}
                >{todo.title}</label>
                <button
                    className="destroy"
                    onClick={() => dispatch(deleteJob(index))}
                ></button>
            </div>
            <input
                className="edit"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && handleOnKeyUp(e.target.value)}
                onBlur={(e) => handleOnBlur(e.target.value)}
            />
        </li>
    )
}

export default TodoItem