import { clearCompletdJob, switchFilter } from "../include/action";

function Footer({ todos, dispatch, filter, filters }) {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{todos.filter(todo => todo.completed).length}</strong> item left
			</span>
			<ul className="filters">
				{Object.keys(filters).map(type => (
					<li>
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

			{todos.filter(todo => todo.completed).length > 0 && (
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
