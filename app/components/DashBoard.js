'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';

import UserDetails from './UserDetails';
import TaskList from './TaskList';


export default class DashBoard extends Component {

  static propTypes = {
    checkNetworkConnection: PropTypes.func,
    invokeTaskDataWebservice: PropTypes.func,

    showUserLoading: PropTypes.bool,
    showTaskLoading: PropTypes.bool,
       taskArray: PropTypes.array,
    
  };
  
  componentDidMount() {
    this.props.checkNetworkConnection();
  }

  _onRefresh = () => {
    this.props.invokeTaskDataWebservice();
  }

  render() {
    return (
      <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={this._onRefresh}
        />
      }>
        <View>

          <UserDetails
            showLoading={this.props.showUserLoading}
            userInfo={this.props.userInfo}/>

          <TaskList
            showLoading={this.props.showTaskLoading}
            taskArray={this.props.taskArray}/>

        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
});
