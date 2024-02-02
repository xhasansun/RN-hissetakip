import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BoldText = (props) => {
  const { color, fontSize, style } = props;

  // `style` prop'unu genişletip, `color` ve `fontSize` değerlerini içerecek şekilde ayarlayın
  const textStyle = [
    styles.text,
    {
      fontFamily: 'Helvetica-Bold',
      color: color || 'black', // Varsayılan renk: siyah
      fontSize: fontSize || 16, // Varsayılan font boyutu: 16
    },
    style, // Başka bir stil prop'u da varsa ekleyin
  ];

  return (
    <Text style={textStyle}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'Helvetica-Bold', // Bu satırı buradan kaldırdık
  },
});

export default BoldText;
