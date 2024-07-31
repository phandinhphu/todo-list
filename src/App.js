import "./App.css";
import { useReducer } from "react";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";
import reducer, { initState } from './include/reducer' 


function App() {

	const [state, dispatch] = useReducer(reducer, initState)

	const { job, jobs, editIndex, filter, filters } = state

	return (
		<section className="todoapp">
			<Header job={job} dispatch={dispatch}/>
            {jobs.length > 0 && 
				<TodoList
					todoList={jobs}
					dispatch={dispatch}
					editIndex={editIndex}
					filter={filter}
					filters={filters}
				/>
			}
            {jobs.length > 0 && (
				<Footer
					todos={jobs}
					dispatch={dispatch}
					filter={filter}
					filters={filters}
				/>
			)}
		</section>
	);
}

export default App;
