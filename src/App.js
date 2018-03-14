import React from 'react';
import DevTools from 'mobx-react-devtools';
import CounterPanel from './CounterPanel'

class App extends React.Component {

    render() {

        // TODO uncomment me to use MobX React DevTools
        //const devTools = process.env.NODE_ENV === 'development' ? (<DevTools />) : undefined;

        return <CounterPanel />
    }
}

export default App;
