export const TAKE_ALL_DECKS = 'TAKE_ALL_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_DECK = 'REMOVE_DECK'
export function takeAllDecks (decks) {
  return {
    type: TAKE_ALL_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addQuestion(title, question, answer) {
  return {
      type: ADD_QUESTION,
      question: { title:title, question, answer }
  }
}
export function removeDeck(title){
  return {
    type: REMOVE_DECK,
    title,
  }
}