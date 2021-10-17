import { Component } from 'react'
import Die from './Die'


class RollDice extends Component {
    static defaultProps = {
        sides: ["faDiceOne", "faDiceTwo", "faDiceThree", "faDiceFour", "faDiceFive", "faDiceSix"]
    };
    constructor(props) {
        super(props);
        this.state = {
            die1: 'faDiceOne',
            die2: 'faDiceOne'
        }
        this.roll = this.roll.bind(this);
    }
    roll() {
        const newDie1 = this.props.sides[Math.floor((Math.random() * this.props.sides.length))];
        const newDie2 = this.props.sides[Math.floor((Math.random() * this.props.sides.length))];
        this.setState({ die1: newDie1, die2: newDie2 });
    }
    render() {
        return (
            <>
                <div>
                    <Die die1={this.state.die1} die2={this.state.die2} />
                    <Die die1={this.state.die1} die2={this.state.die2} />
                </div>
                <button onClick={this.roll}>Roll Dice</button>
            </>
        )
    }
}



export default RollDice