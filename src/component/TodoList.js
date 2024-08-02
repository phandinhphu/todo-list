import { toggleAll } from "../include/action.js";
import { useStore } from "../include/hooks.js";
import TodoItem from "./TodoItem.js";

function TodoList() {

    const [{ jobs, filter, filters }, dispatch] = useStore()

    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onChange={(e) => dispatch(toggleAll(e.target.checked))}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {jobs.filter(filters[filter]).map((todo, index) => (
                    <TodoItem
                        index={index}
                        key={todo.title}
                        todo={todo}
                    />
                ))}
            </ul>
        </section>
    )
}

export default TodoList