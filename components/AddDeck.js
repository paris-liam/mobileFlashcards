import React, { Component } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as actions from '../actions';
import * as helpers from '../utils/helpers';
import { connect } from 'react-redux';
import Styles from '../utils/styles';

class AddDeck extends Component {
    state = {
        title: ''
    };

    submit = () => {
            this.props.dispatch(actions.addDeck(this.state.title));
            this.setState({title: ' '});
            Keyboard.dismiss();
            helpers.addDeck(this.state.title).then(()=>{        this.props.navigation.navigate(
                'SingleDeck',
                {deckId: this.state.title}
            )})
    };

    render() {
        return (
            <View style={{flex: 1,justifyContent:'flex-start',alignContent:'center'}}>
                <Text style={Styles.allDeckstitle}>New deck</Text>
                <Text style={{fontSize:15,}}> Name:</Text>
                <TextInput
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                    style={Styles.textInput}
                />
                <TouchableOpacity
                    onPress={this.submit}
                    style={Styles.DeckButton}
                    disabled={this.state.title === null}
                >
                    <Text style={{color:'white'}}>Add deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(AddDeck);