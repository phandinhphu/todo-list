import { useStore } from "../include";
import { clearCompletdJob, switchFilter } from "../include/action";

function Footer() {

	const [{ jobs, filter, filters }, dispatch] = useStore()

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{jobs.filter(todo => todo.completed).length}</strong> item left
			</span>
			<ul className="filters">
				{Object.keys(filters).map(type => (
					<li
					    key={type}
					>
						<a
							className={filter === type ? "selected" : undefined}
							href="http://localhost:3000/#"
							onClick={() => dispatch(switchFilter(type))}
						>
							{type[0].toUpperCase() + type.slice(1)}
						</a>
					</li>
				))}
			</ul>

			{jobs.filter(todo => todo.completed).length > 0 && (
				<button
					className="clear-completed"
					onClick={() => dispatch(clearCompletdJob())}
				>
					Clear completed
				</button>
			)}
		</footer>
	);
}

export default Footer;
