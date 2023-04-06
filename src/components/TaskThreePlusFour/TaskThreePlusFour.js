import React from "react";

class TaskThreePlusFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        number: 1
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.number !== prevState.number) {
            console.log(`Number is now ${this.state.number}`);
        }
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.number <= 3;
    }

    render() {
        return (
        <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.handleClick}>Increase number</button>
        </div>
        );
    }
}

export default TaskThreePlusFour;
