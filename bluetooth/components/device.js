import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Separtor from './separtor';
function Device(props) {
  return (
    <>
      <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
        <View style={styles.wrapperLeft}>
          <Image style={styles.iconLeft} source={props.iconLeft} />
        </View>
        <View style={styles.wrapperName}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <Image style={styles.iconRight} source={props.iconRight} />
      </TouchableOpacity>
      <Separtor />
    </>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'space-between',
  },
  wrapperLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperName: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  name: {fontSize: 30},
  iconRight: {width: 20, height: 20},
  iconLeft: {width: 20, height: 20},
});
export default Device;
