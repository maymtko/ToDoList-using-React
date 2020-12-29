import React from "react";
import { Button, Checkbox } from 'antd';

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            listArr: [
                "Read A Book",
                "Bake A Cake"

            ]
        };
    }

    Add = (event) => {
        event.preventDefault();
        console.log(this.state.inputValue);
        this.setState({ listArr: this.state.listArr.concat(this.state.inputValue) });
        this.setState({ inputValue: '' });
        event.target.reset();


    };
    changeHandler = (e) => {
        this.setState({ inputValue: e.target.value });
    };
    removeItem = (i) => {
        console.log(i);
        const newArr = this.state.listArr.filter((item, index) => index !== i);
        console.log(newArr);
        this.setState({ listArr: newArr });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.Add}>

                    <input type="text" placeholder="Add Your To Do List" size="small" onChange={this.changeHandler} style={{ border: ' 1px solid #ccc', width: '420px', padding: '5px 5px' }} />

                    <Button htmlType="submit" type="primary" style={{ marginLeft: '5px' }}>ADD</Button>

                </form>
                <div style={{ marginTop: '15px', width: '500px' }}>
                    <ul>
                        {this.state.listArr.map((item, index) => (
                            <div key={index}>
                                <li style={{ padding: '10px' }}>
                                    {item}

                                    <Button type="danger" size="small" style={{ marginLeft: '20px', float: 'right' }} onClick={() => this.removeItem(index)}>Delete</Button>
                                    <Checkbox style={{ marginLeft: '10px', float: 'right' }}>Done</Checkbox>
                                </li>
                            </div>
                        ))}

                    </ul>
                </div>
            </div>
        );
    }

};

export default ToDoList