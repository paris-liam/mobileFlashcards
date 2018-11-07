import React from 'react'
import { View, Platform, StatusBar, TouchableOpacity } from 'react-native'
import AddDeck from './components/AddDeck'
import AddQuestion from './components/AddQuestion';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Decks from './components/Decks'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome,Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo';
import SingleDeck from './components/SingleDeck'
import {pink,blue,purple,white} from './utils/styles';
import Quiz from './components/Quiz'

function MobileCardStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'All Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  SingleDeck: {
    screen: SingleDeck,
    navigationOptions: {
        headerTintColor: pink,
        headerStyle: {
            backgroundColor: blue,
        }
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
        headerTintColor: purple,
        headerStyle: {
            backgroundColor: blue,
        }
    }
},
Quiz: {
    screen: Quiz,
    navigationOptions: {
        headerTintColor: pink,
        headerStyle: {
            backgroundColor: blue,
        }
    }
}
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MobileCardStatusBar backgroundColor={pink} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}