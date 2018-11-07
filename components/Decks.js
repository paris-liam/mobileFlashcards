import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { getAllDecks } from '../utils/helpers';
import {takeAllDecks} from '../actions/index';
import Styles from '../utils/styles'
class Decks extends Component {
  constructor(props){
    super(props);
    this.navigateDeck = this.navigateDeck.bind(this);
  }
  componentDidMount () {
    getAllDecks().then((allDecks)=>this.props.dispatch(takeAllDecks(allDecks)));
  }
  navigateDeck(title){ 
    this.props.navigation.navigate(
        'SingleDeck',
        {deckId: title}
    );
  }
  render() {
    const { decks } = this.props;
    if(decks !== null){
    deckList = Object.keys(decks).map((deckKey)=>{
      return {title:decks[deckKey].title,Qlength:decks[deckKey].questions.length}
    })}
    return (
      <View style={{flex: 1,justifyContent:'flex-start'}}>
        <Text style={Styles.allDeckstitle}>Mobile FlashCards</Text>
        <View>
          {deckList.map((deck)=>
              <TouchableOpacity style={Styles.DeckItem} key={`${deck.title}button`} onPress={()=>{this.navigateDeck(deck.title)}}>
                <Text style={Styles.DeckItemText}key={`${deck.title}title`}>{deck.title}  {deck.Qlength} questions</Text>
              </TouchableOpacity>)
          }
        </View>
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(Decks)

