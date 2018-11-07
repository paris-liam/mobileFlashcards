import { AsyncStorage } from 'react-native';
export const DECK_STORAGE_KEY = 'MobileCards:decks';
export function formatDeck(deckData) {
    if(deckData === null){
        return initialDecks()
    }
    else{
        return JSON.parse(deckData);
    }
}

function initialDecks() {
    const initialDecks = {
        'Math': {
            title: 'Math',
            questions: [
                {
                    question: `1+2`,
                    answer: '3'
                },
                {
                    question: `4x6`,
                    answer: '24'
                },
                {
                    question: `9x1`,
                    answer: '1'
                }
            ]
        },
        'Colors': {
            title: 'Colors',
            questions: [
                {
                    question: `regular apple`,
                    answer: 'red'
                },
                {
                    question: `ocean`,
                    answer: 'blue'
                },
                {
                    question: `grass`,
                    answer: 'green'
                },

            ]
        }
    };

    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialDecks));

    return initialDecks;
}