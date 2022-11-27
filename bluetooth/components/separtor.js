import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

function Separtor(props) {
  return (
    <View style={[styles.separtor,{borderColor:props.color?props.color:'#eceff1'}]}/>
  );
}
const styles = StyleSheet.create({
  separtor: {
    borderColor: '#eceff1',
    marginLeft: 60,
    flex:1,
    borderTopWidth:1,
    marginRight:25
  }
});
export default Separtor;
