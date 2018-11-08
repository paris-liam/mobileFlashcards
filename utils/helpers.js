import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY, formatDeck } from './deckData';

export function getAllDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            return formatDeck(results);
        })
}
export function addDeck(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }));
}

export function addQuestion(title, question, answer) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const deck = JSON.parse(results)[title];

            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
                [deck.title]: {
                    title: deck.title,
                    questions: [...deck.questions, { question, answer }]
                }
            }));
        });
}