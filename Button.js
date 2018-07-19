import React,{ Component }  from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={[styles.container]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.callback()}
                >
                    <Text style={styles.text}> {this.props.text || ''} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 4,
        width:200,
        height: 50,

    },
    text:{
        fontSize:25
    }
});
