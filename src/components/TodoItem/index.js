// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {title, id} = todoList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-container">
      <p className="todo">{title}</p>
      <button type="button" className="todoBtn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
