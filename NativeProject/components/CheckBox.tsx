import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';


const checked = require('../assets/images/check.png');
const unChecked = require('../assets/images/uncheck.png');
const checkboxImage = {true: checked, false: unChecked};
const CheckBox = () => {
  const [isChecked, setChecked] = useState(checkboxImage.false);
  const checkboxChange = () => {
    if (isChecked == checkboxImage.true) {
      setChecked(checkboxImage.false);
    } else {
      setChecked(checkboxImage.true);
    }
  };
  return (
    <TouchableOpacity onPress={checkboxChange}>
      <Image style={styles.check} source={isChecked} />
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    left:9,
    top:-1,
  },
});
