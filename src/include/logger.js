
function logger(reducer) {
    return (state, action) => {
        console.group(action.type)
        console.log('Previous state:', state)

        let newState = reducer(state, action)

        console.log('New state:', newState)
        console.groupEnd()
        
        return newState
    }
}

export default logger