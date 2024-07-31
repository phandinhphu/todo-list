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
} from './constant'
import storage from './storage'

// Init state
export const initState = {
	job: '',
	jobs: storage.get(),
	filter: 'all',
	filters: {
		all: () => true,
		active: todo => !todo.completed,
		completed: todo => todo.completed
	},
	editIndex: null,
}

// Reducer
const reducer = (state, action) => {
	let newState

	switch (action.type) {
		case SET_JOB:
			newState = {
				...state,
                job: action.payload
			}
			break
		case ADD_JOB:
			newState = {
                ...state,
                jobs: [
					...state.jobs, 
					{ 
						'title': action.payload, 
						'completed': false
					}
				]
            }
            break
		case DELETE_JOB:
			newState = {
                ...state,
                jobs: state.jobs.filter((job, index) => index !== action.payload)
            }
            break
		case TOGGLE:
			const job = state.jobs[action.payload]
			newState = {
				...state,
                jobs: [
                    ...state.jobs.slice(0, action.payload),
                    {...job, completed:!job.completed },
                    ...state.jobs.slice(action.payload + 1)
                ]
			}
			break
		case TOGGLE_ALL:
			newState = {
				...state,
				jobs: state.jobs.map(item => {
					return { ...item, completed: action.payload }
				})
			}
			break
		case EDIT_JOB:
			newState = {
				...state,
				editIndex: action.payload,
			}
			break
		case END_EDIT:
			const newTitle = action.payload.trim()
			if(newTitle) {
				newState = {
					...state,
					jobs: [
						...state.jobs.slice(0, state.editIndex), 
						{...state.jobs[state.editIndex], title: newTitle }, 
						...state.jobs.slice(state.editIndex + 1)
					],
					editIndex: null,
				}
			}
			else {
				newState = {
					...state,
					jobs: state.jobs.filter((job, index) => index !== state.editIndex),
					editIndex: null,
				}
			}
			break;
		case CLEAR_COMPLETED:
			const newJob = state.jobs.filter(job => !job.completed)
			newState = {
				...state,
                jobs: newJob,
			}
			break
		case SWITCH_FILTER:
			newState = {
				...state,
				filter: action.payload
			}
			break
		default:
			throw new Error('Invalid value action')
	}

	storage.set(newState.jobs)
	return newState
}

export default reducer