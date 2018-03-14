import React from 'react'
import SimpleCounter from "./SimpleCounter";
import ToggleButton from "./ToggleButton";

class CounterPanel extends React.Component {

    state = {
        on: false
    };

    onClick = () => {
        this.setState({on: !this.state.on})
    };

    render() {
        return (
            <div style={{border: '1px solid red', padding: '20px'}}>
                <SimpleCounter on={this.state.on}/>

                <ToggleButton on={this.state.on}
                              onClick={this.onClick}/>
            </div>
        )
    }
}

export default CounterPanel