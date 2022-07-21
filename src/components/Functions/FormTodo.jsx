import React from 'react';

export default function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}> 
                <input type="text" className="input_box" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
                <button className='btn submit_button' type="submit">Submit</button>
        </form>
    );
}