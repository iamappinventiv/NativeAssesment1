import React from 'react';
import {View, StyleSheet, TextInput, Text, Image} from 'react-native';
import {COLORS} from '../ui-kit/color';

const TextInputFeild = () => {
  return (
    <View>
      <View style={styles.input}>
        <View style={styles.inputIcon}>
          <Image source={require('../assets/images/name.png')} />
        </View>
        <TextInput style={styles.textFeild} placeholder="Name" />
      </View>
      <View style={styles.input}>
        <View style={styles.inputIcon}>
          <Image
            style={{height: 12, width: 12}}
            source={require('../assets/images/email.png')}
          />
        </View>
        <TextInput style={styles.textFeild} placeholder="Email" />
      </View>
      <View style={styles.input}>
        <View style={styles.inputIcon}>
          <Image source={require('../assets/images/password.png')} />
        </View>
        <TextInput style={styles.textFeild} placeholder="Password" />
      </View>
      <Text style={styles.textInput}>
        password strenght: <Text style={styles.highlight}>Strong</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: '18%',
    width:"90%",
    margin: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: COLORS.white,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center'
  },
  textFeild: {
    height: 42,
    width: '85%',
    alignItems: 'center',
  },
  textInput: {
    color: COLORS.dark_grey,
    margin:14
  },
  highlight: {
    color: COLORS.green,
    fontSize: 15,
    fontWeight: '700',
  },
  inputIcon: {
    height: 12,
    width: 12,
    margin:12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TextInputFeild;
