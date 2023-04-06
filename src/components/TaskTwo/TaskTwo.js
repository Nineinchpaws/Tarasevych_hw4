import React from "react";

class TaskTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            visible: !this.state.visible
        });
    }

    componentDidMount() {
        alert("Component is mounted");
    }

    componentDidUpdate() {
        alert(`Component is ${this.state.visible ? "visible" : "hidden"}`);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.visible ? "Hide" : "Show"}
                </button>
                {this.state.visible && <div>Visible content</div>}
            </div>
            );
    }
}

export default TaskTwo;
