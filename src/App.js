import "./App.css";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";
import { useStore } from "./include";

function App() {
	const [state] = useStore();

	const { jobs } = state;

	return (
		<section className="todoapp">
			<Header key="header" />
			{jobs.length > 0 && <TodoList key="todos" />}
			{jobs.length > 0 && <Footer key="footer" />}
		</section>
	);
}

export default App;
