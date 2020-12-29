import React from 'react';
import ToDoList from './ToDoList';

class App extends React.Component {
    render() {
        return (
            <div className="container" style={{ width: '600px', margin: '40px auto' }}>
                <h1>To Do List</h1>
                <ToDoList />
            </div>
        );
    }



};

export default App