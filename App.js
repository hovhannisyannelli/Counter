import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './Button';
import Counter from './Counter';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this._up = this._up.bind(this);
        this._down = this._down.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button callback={this._up} text="Up"/>
                <Counter count={this.state.count}/>
                <Button callback={this._down} text="Down"/>
            </View>
        );
    }

    _up() {
        this.setState({
            count: this.state.count + 1
        });
    }

    _down() {
        this.setState({
            count: this.state.count - 1
        });
    }
 }

 const styles = StyleSheet.create({

    container: {
        backgroundColor: 'powderblue',
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4
    }
});

