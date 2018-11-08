import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../utils/styles';
import{white} from '../utils/styles';
import * as actions from '../actions'
import * as helpers from '../utils/helpers'
class SingleDeck extends Component {
    state = {
        deck: {title:'dummy',
        questions:[{
            question:'dummy',
            answer:'dummy',
        }],
    }
    };

    static navigationOptions = ({navigation}) => {
        const {deckTitle} = navigation.state.params;
        return {
            title: deckTitle
        }
    };

    navigateQuiz(deckTitle){
        this.props.navigation.navigate(
            'Quiz',
            {deckId: deckTitle}
        );
    }
    navigateAddQuestion(){
        this.props.navigation.navigate(
            'AddQuestion',
            {deckId: this.state.deck.title}
        );
    }
    deleteDeck(title){
        this.props.dispatch(actions.removeDeck(title));
        helpers.removeDeck(title);
        this.props.navigation.dispatch(NavigationActions.back());
    }
    componentDidMount() {

        let deckItem = null;
        Object.keys(this.props.decks).forEach(deckKey => {
            if (deckKey === this.props.navigation.state.params.deckId){
                deckItem = deckKey;
            }
        });
        this.setState({deck: this.props.decks[deckItem]});
    }
    componentWillReceiveProps(props) {
            let deckItem = null;
            Object.keys(props.decks).forEach(deckKey => {
                if (deckKey === this.props.navigation.state.params.deckId){
                    deckItem = deckKey;
                }
            });
            this.setState({deck: props.decks[deckItem]});
    }
    render() {
        console.log('THIS IS THE STATE ',this.state.deck);
        return (
            <View>
                <Text style={Styles.allDeckstitle}>{this.state.deck.title}</Text>
                <Text style={Styles.NumOfQuestions}>{this.state.deck.questions.length} Questions</Text>
                <TouchableOpacity style={Styles.DeckButton} onPress={()=>this.navigateAddQuestion(this.state.deck.title)}><Text style={{color:white}}>Add Question</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.DeckButton} onPress={()=>this.navigateQuiz(this.state.deck.title)}><Text style={{color:white}}>Start Quiz</Text></TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(SingleDeck);