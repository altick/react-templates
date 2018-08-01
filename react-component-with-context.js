import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import autobind from 'autobind-decorator';

import SomeContext from './react-context-template';

class SomeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.props.actions.someAction('hello', 'World').then(() => {
            // this.props.navigation.push('Next Screen');
        });
    }

    render() {
        const { someValue, actions: { someAction } } = this.props;
        
        return (
            <View>
                <Text>Hello { test }</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    
});

let SomeComponentWithContext = props => (
    <SomeContext.Consumer>
        {state => (
            <SomeComponent { ...props } {...state} ></LoginPage>
        ) }
    </SomeContext.Consumer>
);

export default SomeComponentWithContext;
