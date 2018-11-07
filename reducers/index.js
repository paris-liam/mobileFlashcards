import {TAKE_ALL_DECKS,ADD_DECK,ADD_QUESTION, REMOVE_DECK} from '../actions';
function  deckReducer(state = {}, action) {
  switch (action.type) {
    case TAKE_ALL_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
                [action.title]: {
                    title: action.title,
                    questions: []
                }
      }
    case ADD_QUESTION:
      return{
        ...state,
        [action.question.title]: {
            title: action.question.title,
            questions: [
                ...state[action.question.title].questions,
                { question: action.question.question, answer: action.question.answer }
            ]
        }
    }
    case REMOVE_DECK:
      let removedArrays = Object.keys(state).filter((deckID)=>state[deckID].title!==action.title);
    let newDeck = {};
    removedArrays.forEach((id)=>{
        newDeck[id] = state[id];
    })
    return newDeck;
    default :
      return state
  }
}

export default deckReducer;