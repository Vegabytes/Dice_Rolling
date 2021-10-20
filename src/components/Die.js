import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './Die.css'


class Die extends Component {
    static defaultProps = {
        sides: [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
    };

    getSides(side) {
        return this.props.sides[side]
    }


    render() {
        const { face, rolling } = this.props;
        return (
            <span >
                <FontAwesomeIcon className={`Die ${rolling && 'shaking'}`} icon={this.getSides(face)} />
            </span>
        )
    }

}



export default Die