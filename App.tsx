import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

export default function App(): JSX.Element {
  const [color, setColor] = useState('#000000');
  const [btnColor, setBtnBtnColor] = useState('#8a5454');

  const changeColor = () => {
    const HexValues = '0123456789ABCDEF';
    let newColor = '#';
    let newBTnColor = '#';

    for (let i = 0; i < 6; i++) {
      newColor += HexValues[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);

    for (let i = 0; i < 6; i++) {
      newBTnColor += HexValues[Math.floor(Math.random() * 16)];
    }
    setBtnBtnColor(newBTnColor);
  };

  return (
    <>
      <StatusBar backgroundColor={color} />
      <View style={[styles.container, {backgroundColor: color}]}>
        <TouchableOpacity onPress={changeColor}>
          <View style={[styles.actionBtn, {backgroundColor: btnColor}]}>
            <Text style={styles.actionBtnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionBtn: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
  },

  actionBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
