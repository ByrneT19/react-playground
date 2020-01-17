import React,{Component} from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log('constructor');
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)     
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    greenOrRedWire() {
        const {count} = this.state
        if(count >= 8) {
            clearInterval(this.timer)
            return ('BOOM!!!!')
        } else if(count % 2 === 0) {
            return ('tick')
        } else {
            return ('tock')
        }
    }

    render() {
       return(
           <div className="tickingTimeBomb">
               <p>{this.greenOrRedWire()}</p>
           </div>
       )
    }
}

export default Bomb;
