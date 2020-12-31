import * as React from 'react';
import * as Speech from 'expo-speech';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import Header from './components/Header';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      word:""
    }
  }
  checkSC = (string) =>{
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(string)){

      return true;
    } else {

      return false;
    }
  }
  speak = () =>{
    var thingToSay = this.state.word.trim();

    thingToSay === "" || thingToSay === '' || this.checkSC(thingToSay)
    ? (Alert.alert('Please Enter a valid Word or Speech'))
    : (Speech.speak(thingToSay))
  }
  render(){
    return (
      <View>
        <Header/>
        <Image style={styles.img} source={require('./assets/tts.png')}/>
        <Text style={styles.text}>Enter The Word Below</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {this.setState({word:text})}}
          value={this.state.word}
        />
        <TouchableOpacity style={styles.butcont} onPress={this.speak}>
          <Text style={styles.text}>Play The Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img:{
    width:150,
    height:150,
    margin:30,
    alignSelf:'center'
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  input: {
    width:200,
    height:50,
    marginTop:50,
    alignSelf:'center',
    textAlign:'center',
    borderWidth:5,
    borderColor:'#000',
    backgroundColor:'#fff'
  },
  butcont: {
    backgroundColor:'#00B8C0',
    width:200,
    height:75,
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:5,
    borderRadius:25,
    marginTop:20
  }
})