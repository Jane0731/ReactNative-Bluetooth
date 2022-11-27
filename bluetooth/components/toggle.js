import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

function Toggle(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.value?'ON':'OFF'}</Text>
      <Switch style={styles.switch} value={props.value} onValueChange={props.onValueChange}/>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    marginLeft: 10,
  },
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  switch: {
    width: 50,
  },
});
export default Toggle;
