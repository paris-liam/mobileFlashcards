import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {QuestionTile} from './QuestionTile';
import Styles from '../utils/styles';

class Quiz extends Component {
    state = {
        questions: [],
        currentQ: 0,
        show: true
    };

    static navigationOptions = ({navigation}) => {
        const {deckTitle} = navigation.state.params;
        return {
            title: deckTitle
        }
    };

    componentDidMount() {
        const {decks, navigation} = this.props;
        const deck = decks[navigation.state.params.deckId];
        const questions = deck.questions.map((question) => {
            return {
                question: question.question,
                answer: question.answer,
                correct: false
            }
        });

        this.setState({questions});
    }

    resetQuiz = () => {
        const questions = this.state.questions.map((question) => {
            return { question: question.question, answer: question.answer, correct: false }
        });

        this.setState({questions, currentQ: 0, show: true});
    };

    handleButtons = (status) => {
        const questions = this.state.questions;
        questions[this.state.currentQ].correct = status;

        this.setState({questions, currentQ: this.state.currentQ + 1, show: true});
    };

    toggleQuestion = () => {
        this.setState({show: !this.state.show});
    };
    backToDeck = () =>{
        this.props.navigation.dispatch(NavigationActions.back());
    }

    render() {
        return (
            <View>
                {this.state.questions.length > 0 &&
                this.state.currentQ < this.state.questions.length &&
                <QuestionTile index={this.state.currentQ}
                      show={this.state.show}
                      questions={this.state.questions}
                      onQuestionPress={this.toggleQuestion}
                      onButtonPress={this.handleButtons}
                />
                }
                {(this.state.questions.length > 0 &&
                this.state.currentQ >= this.state.questions.length) &&
                <View >
                    <View style={{alignItems: 'center'}}>
                        {this.state.questions.filter(question => question.correct).length === this.state.questions.length &&
                        <Text>Correct!</Text>
                        }
                        {this.state.questions.filter(question => question.correct).length !== this.state.questions.length &&
                        <Text>Issue!</Text>
                        }
                        <Text>{this.state.questions.filter(question => question.correct).length}
                            of {this.state.questions.length} questions correct
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={Styles.DeckButton}
                            onPress={backToDeck}>
                            <Text style={{color:'white'}}>Back to Deck</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.DeckButton}
                            onPress={this.resetQuiz}>
                            <Text style={{color:'white'}}>Restart Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }
                {this.state.questions.length === 0 &&
                <Text>Add Some Questions!!</Text>
                }
            </View>
        );
    }
}



function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Quiz);