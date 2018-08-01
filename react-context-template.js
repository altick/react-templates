// @flow

import * as React from 'react';

const InitialContextState = {
    someValue: 'Hello world!',
    actions: {
        someAction: async () => {}
    }
}

const { Consumer, Provider: ContextProvider } = React.createContext(InitialContextState);

class Provider extends React.Component {

    someAction = async (param1, param2) => {
        
    }

    state = {
        ... InitialContextState,
        actions: {
            someAction: this.someAction
        }
    }

    render = () => (
        <ContextProvider value={this.state}>{ this.props.children }</ContextProvider>
    )
}

let SomeContext = { Consumer, Provider };
export default SomeContext;
