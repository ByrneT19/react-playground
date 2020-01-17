import React, {Component} from 'react';

class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'world'
        }
    }
    
    render() {
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.setState({who: ' world!'})}>World</button>
                <button onClick={() => this.setState({who: ' friend!'})}>Friend</button>
                <button onClick={() => this.setState({who: ' React!'})}>React</button>
            </div>
        )
    }
}

export default Hello;