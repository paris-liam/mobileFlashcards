import React, { Component } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as actions from '../actions';
import {addQuestion} from '../utils/helpers';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import Styles from '../utils/styles'
class AddQuestion extends Component {
    state = {
        question: '',
        answer: ''
    };

    static navigationOptions = ({navigation}) => {
        const {deckTitle} = navigation.state.params;
        return {
            title: deckTitle
        }
    };

    submit = () => {
        {question,answer} = this.state;
        if (question && answer) {
            this.props.dispatch(actions.addQuestion(this.props.navigation.state.params.deckId, question, answer));
            addQuestion(this.props.navigation.state.params.deckId, question, answer);

            this.setState({question: '', answer: ''});
            Keyboard.dismiss();
            this.props.navigation.dispatch(NavigationActions.back());
        }
    };

    render() {
        return (
            <View>
                <Text style={Styles.allDeckstitle}>Add card to { this.props.navigation.state.params.deckId }</Text>
                <Text>Question</Text>
                <TextInput
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                    style={Styles.textInput}
                />
                <Text>Answer</Text>
                <TextInput
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                    style={Styles.textInput}
                />
                <TouchableOpacity
                    style={Styles.DeckButton}
                    onPress={this.submit}>
                    <Text style={{color:'white'}}>Add Question</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddQuestion);