import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ArrowSvg, Bell, Basket, Github, Google} from '../assets/svg';
import {COLORS} from '../ui-kit/color';
import TextInputFeild from '../components/TextInput';
import CheckBox from '../components/CheckBox';


const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        resizeMode={'stretch'}
        style={styles.image}
        source={require('../assets/images/bg.png')}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <ArrowSvg />
            <Text style={styles.headerText}>Create Account</Text>
          </View>
          <View style={styles.headerRight}>
            <Bell />
            <Basket />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.authContainerText}>Sign up with </Text>
            <View style={styles.authContainer}>
              <TouchableOpacity activeOpacity={0.5} style={styles.authSign}>
                <Github />
                <Text style={styles.authText}>GITHUB</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.authSign}>
                <Google />
                <Text style={styles.authText}>GOOGLE</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.midContainer}>
            <Text style={styles.midContainerText}>
              Or sign up with credentials
            </Text>
            <TextInputFeild />
            <View style={styles.footer}>
              <View style={styles.checkBoxContainer}>
                <CheckBox/>
                <Text>
                  {'  '}I agree with the{' '}
                  <Text style={styles.checkBoxText}>Privacy Policy</Text>
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                <Text style={styles.btnText}>CREATE ACCOUNT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    flex: 0.5,
    width: '95%',
    marginTop: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 50,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '16%',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    height: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'flex-start',
    height: '76%',
    width: '90%',
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    marginBottom: 50,
  },
  subContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 6,
    backgroundColor: COLORS.white,
    marginBottom: 20,
  },
  subContainerText: {
    flex: 1,
    alignSelf: 'center',
    color: COLORS.dark_grey,
  },
  authContainerText: {
    color: COLORS.dark_grey,
    marginTop: 60,
    backgroundColor: COLORS.white,
  },
  authSign: {
    width: '42%',
    height: '52%',
    backgroundColor: COLORS.white,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    flexDirection: 'row',
    elevation: 4,
    paddingHorizontal: 20,
    margin: 8,
  },
  authText: {
    color: COLORS.royal_blue,
    fontSize: 18,
    fontWeight: '700',
  },
  midContainer: {
    flex: 0.5,
    backgroundColor: COLORS.grey,
    height: '10%',
    width: '100%',
  },
  midContainerText: {
    alignSelf: 'center',
    marginTop: 44,
    marginBottom: 24,
    color: COLORS.dark_grey,
  },
  footer: {},
  btn: {
    height: '28%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.royal_blue,
    alignSelf: 'center',
    borderRadius: 4,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
  },
  checkBoxText: {
    color: COLORS.royal_blue,
  },
  checkBoxContainer: {
    height: '30%',
    width: '100%',
   margin:4,
  flexDirection:'row',
  paddingRight:10
    
  },
  authContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },
});

export default Login;
