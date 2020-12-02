'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './listrows/TaskRow';
import SelectionRow from './listrows/SelectionRow';

const _ = require('lodash');

export default class ViewTask extends Component {

  static propTypes = {
    viewData: PropTypes.object,
  };

  _renderRow({item}) {
    return(
      <SelectionRow
        rowData={item}/>
    );
  }

  _keyExtractor(data) {
    return data.id;
  }

  _renderScreen() {
   
      return (
        <View>
          <Text style={{color: 'black', marginHorizontal: 20}}>
            Selected Player List  
          </Text>
          <FlatList
            style={{paddingVertical: 10, marginLeft: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.viewData.name}
            renderItem={this._renderRow}
            keyExtractor={this._keyExtractor} />
        </View>
        
      );
    
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderScreen()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
});
