import { Component } from 'react'
import Die from './Die'
import './RollDice.css'


class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            die1: 0,
            die2: 0,
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }
    roll() {
        const newDie1 = Math.floor((Math.random() * 6));
        const newDie2 = Math.floor((Math.random() * 6));
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });
        setTimeout(() => this.setState({ rolling: false }), 1000);
    }
    render() {
        return (
            <>
                <div className="RollDice">
                    <div>
                        <Die face={this.state.die1} rolling={this.state.rolling} />
                        <Die face={this.state.die2} rolling={this.state.rolling} />
                    </div>
                    <button
                        disabled={this.state.rolling}
                        onClick={this.roll}>
                        {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
                    </button>
                </div>

            </>
        )
    }
}
export default RollDice