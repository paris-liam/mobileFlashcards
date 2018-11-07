import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import Styles from '../utils/styles';
export function QuestionTile(props) {
    const {index, show, questions, onQuestionPress, onButtonPress} = props,
        question = questions[index].question,
        answer = questions[index].answer;
    return (<View >
        <Text>{index + 1} / {questions.length}</Text>
        <View >
            {show ? <Text  style={Styles.allDeckstitle}>{question}</Text>:<Text style={Styles.allDeckstitle}>{answer}</Text>}
            <TouchableOpacity
                style={Styles.DeckButton}
                onPress={onQuestionPress}>
                <Text style={{color:'white'}}>Show { show ? 'Answer' : 'Question' }</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity
                style={Styles.DeckButton}
                onPress={() => onButtonPress(true)}>
                <Text style={{color:'white'}}>Correct</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.DeckButton}
                onPress={() => onButtonPress(false)}>
                <Text style={{color:'white'}}>Incorrect</Text>
            </TouchableOpacity>
        </View>
    </View>)
}
