import React from 'react'

/**
 * @date 14/03/2018
 * @author Martin Gabor
 */

class SimpleButton extends React.Component {

    // private Object state = ...
    state = {
        count: 0
    };

    onClick = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        );
    };

    render() {
        const { title } = this.props;
        const { count } = this.state;

        return (
            <button onClick={this.onClick}>
            {title + ', clicked: ' + count}
            </button>
        )
    }
}

export default SimpleButton