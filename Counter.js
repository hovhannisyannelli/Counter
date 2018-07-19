import React,{ Component }  from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text style={[styles.countText]}>
                    {this.props.count}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        padding: 30
    },
    countText: {
    
        color: 'blue',
        fontSize: 100,
        fontStyle: 'italic'
    }
});
