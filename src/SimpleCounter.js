import React from 'react'

class SimpleCounter extends React.Component {

    state = {
        count: 0
    };

    render() {
        const { on } = this.props;
        const { count } = this.state;

        if (on) {
            setTimeout(() => {
                this.setState({count: this.state.count + 1});
            }, 1000);
        }

        return <h1>{count} seconds</h1>
    }
}

export default SimpleCounter