import React, {Component} from 'react';

class RouletteGun extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                chamber: null,
                spinningTheChamber: false,
            }
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    clickHandle = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
        console.log(this.clickHandle)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    passTheGun() {
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.defaultProps
        if (spinningTheChamber) {
            return('spinning the chamber and pulling the trigger!...')
        } else if (chamber === bulletInChamber) {
            return('BANG!!!!')
        } else {
            return('you\'re safe!!')
        }
    }

    render() {
        return (
            <div>
                <p>{this.passTheGun()}</p>
                <button onClick={() => this.clickHandle()}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;

