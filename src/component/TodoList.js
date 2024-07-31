import { toggleAll } from "../include/action.js";
import TodoItem from "./TodoItem.js";

function TodoList({ todoList, dispatch, editIndex, filter, filters }) {

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
                {todoList.filter(filters[filter]).map((todo, index) => (
                    <TodoItem
                        index={index}
                        key={todo.title}
                        todo={todo}
                        dispatch={dispatch}   
                        editIndex={editIndex} 
                    />
                ))}
            </ul>
        </section>
    )
}

export default TodoList