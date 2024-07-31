import {
    SET_JOB,
    ADD_JOB,
    DELETE_JOB,
    TOGGLE,
    EDIT_JOB,
    END_EDIT,
    CLEAR_COMPLETED,
    TOGGLE_ALL,
    SWITCH_FILTER,
} from './constant.js'

export const setJob = payload => {
	return {
        type: SET_JOB,
        payload
    }
}

export const addJob = payload => {
	return {
        type: ADD_JOB,
        payload
    }
}

export const deleteJob = payload => {
	return {
        type: DELETE_JOB,
        payload
    }
}

export const toggleJob = payload => {
	return {
        type: TOGGLE,
        payload
    }
}

export const toggleAll = payload => {
    return {
        type: TOGGLE_ALL,
        payload
    }
}

export const editJob = payload => {
    return {
        type: EDIT_JOB,
        payload
    }
}

export const endEditJob = payload => {
    return {
        type: END_EDIT,
        payload
    }
}

export const clearCompletdJob = payload => {
    return {
        type: CLEAR_COMPLETED,
        payload
    }
}

export const switchFilter = payload => {
    return {
        type: SWITCH_FILTER,
        payload
    }
}