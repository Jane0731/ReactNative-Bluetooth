import {FlatList, Alert, View, StyleSheet, Switch, Text} from 'react-native';
import Layout from '../components/bluetooth-list-layout';
import Empty from '../components/empty';
import Subtitle from '../components/subtitle';
import Device from '../components/device';
import {useEffect, useState} from 'react';
import {BleManager} from 'react-native-ble-plx';

function BluetoothList() {
  const _BleManager = new BleManager();

  const [scaning, setScaning] = useState(false);
  const [connect, setConnect] = useState(false);
  const [devices, setDevices] = useState();
  const renderEmpty = () => <Empty text="啥都沒有" />;
  const renderItem = ({item}) => {
    return (
      <Device
        {...item}
        iconLeft={require('../icons/ic_laptop.png')}
        iconRight={require('../icons/ic_setting.png')}
      />
    );
  };
  const alert = text => {
    Alert.alert('提示', text, [{text: '确定', onPress: () => {}}]);
  };
  const toggleSwitch = () => {
    setScaning(!scaning);

    if (scaning) {
      _BleManager.startDeviceScan(null,(error, device) => {
        if (error) {
          console.log('startDeviceScan error:', error);
          if (error.errorCode == 102) {
            alert('请打开手机蓝牙后再搜索');
          }
        } else {
          console.log(device.id, device.name);
          // setDevices([...devices, device]);
        }
      });
    }
    

  };
  return (
    <Layout title="Bluetooth">
      <View style={styles.container}>
        <Text style={styles.text}>{scaning ? 'ON' : 'OFF'}</Text>
        <Switch
          style={styles.switch}
          value={scaning}
          onValueChange={toggleSwitch}
        />
      </View>
      <Subtitle title="藍芽設備" />
      <FlatList
        data={devices}
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
      />
    </Layout>
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
export default BluetoothList;
