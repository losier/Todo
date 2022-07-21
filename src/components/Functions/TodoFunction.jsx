import { MdDone, MdOutlineDeleteOutline } from 'react-icons/md';

export default function Todo({ todo, index, markTodo, removeTodo }) {
    return (
        <div className='todo_item'>
            <div className='todo_text_div'>
                <span className='todo_text' style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.text}</span>
            </div>
            <div className='todo_btn_div'>
                <button className='done_button' onClick={() => markTodo(index)}><MdDone /></button>{' '}
                <button className='delete_button' onClick={() => removeTodo(index)}><MdOutlineDeleteOutline /></button>
            </div>
        </div>
    )
}