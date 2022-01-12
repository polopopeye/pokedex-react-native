import React from 'react';
import { TextInput, Button, Text, View } from 'react-native';
// import { defaultProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import PropTypes from 'prop-types';

const Saludar = (props) => {
  const { name } = props;
  return (
    <View>
      <Text>Hola {name} Esto es un saludo </Text>
    </View>
  );
};

Saludar.propTypes = {
  name: PropTypes.string.isRequired,
};

Saludar.defaultProps = {
  name: 'usuario',
};

export default Saludar;
