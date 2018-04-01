'use strict';

import {
  Platform
} from 'react-native';

var React = require('react-native');

const styles = React.StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    bigTitle: {
      color: 'white',
      fontSize: 30,
      marginLeft: 10,
    },
    menuButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginRight: 20, 
        marginLeft: 20, 
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'yellow',
        height: 50,
    },
    buttonText: {
        color: 'yellow',
        fontWeight: 'bold',
    }
  });

  module.exports = styles;