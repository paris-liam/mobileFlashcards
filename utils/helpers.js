import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY, formatDeck } from './deckData';
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'MobileCards:notifications';

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


function createNotification() {
    return {
        title: 'Study Today!',
        body: "take a quiz today",
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(20);
                            tomorrow.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    })
            }
        })
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync);
}