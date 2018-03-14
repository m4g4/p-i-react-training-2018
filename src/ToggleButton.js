
import React from 'react'
import './ToggleButton.scss'

class ToggleButton extends React.Component {

    onClick = () => {
        this.props.onClick();
    };

    render() {
        const { on } = this.props;

        const clName = 'ToggleButton ' + (on ? 'On' : 'Off');

        return (
            <button className={clName}
                    style={{fontSize: '18px'}}
                    onClick={this.onClick}>
                {!on ? 'Turn on' : 'Turn off'}
            </button>
        )
    }
}

export default ToggleButton