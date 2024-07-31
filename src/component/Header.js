import { useRef } from "react"
import { addJob, setJob } from "../include/action"

function Header({ job, dispatch }) {
    const inputRef = useRef()

    const handleSubmit = (payload) => {
        dispatch(addJob(payload))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" 
                ref={inputRef}
                placeholder="What needs to be done?" 
                value={job}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e.target.value)}
                autoFocus
            />
        </header>
    )
}

export default Header