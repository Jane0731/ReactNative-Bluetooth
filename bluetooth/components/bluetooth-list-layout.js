import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function BluetoothListLayout(props) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
export default BluetoothListLayout;
