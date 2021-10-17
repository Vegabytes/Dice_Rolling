import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';


class Die extends Component {
    render() {
        const { die1, die2 } = this.props;
        return (<>
            <div>{this.props.die1}</div>
            <FontAwesomeIcon icon={die1} />
            <FontAwesomeIcon icon={die2} />
        </>
        )
    }
}



export default Die