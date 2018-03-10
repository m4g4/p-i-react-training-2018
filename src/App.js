import React from 'react';
import DevTools from 'mobx-react-devtools';

class App extends React.Component {

    render() {
        const devTools = process.env.NODE_ENV === 'development' ? (<DevTools />) : undefined;

        return (
            <div>
                {devTools}
            </div>);
    }
}

export default App;
