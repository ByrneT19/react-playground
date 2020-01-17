import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {
            count: 0
        }
    }
    handleButtonClick = () => {
        // console.log('props in handleButtonClick', this.props) shows props and state can have the same name and be read at the same time
        // console.log('state in handleButtonClick', this.state)
        // this.setState({ count: this.state.count + 1 })
        const newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }
    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>
                    Add 1
                </button>
            </div>
        )
    }
}

export default Counter;