'use strict';

import {
  Alert,
} from 'react-native';

import { invokeGetWebService } from '../util/HttpClient';
const _ = require('lodash');
import { VALIDATION_MSG, ACTIONS } from '../util/Constants';

/**
 * Invoke user data webservice to get user information
 */
export const invokeUserDataWebservice = () => {

  return ((dispatch) => {

    dispatch({
      type: ACTIONS.RESET_ALL_LOADING,
    });

    invokeGetWebService('370fabfc-abb4-4954-8462-5e64ad4073b3').then((val) => {

      if (_.has(val, 'message')) {
        if (val.message === 'Success' && _.has(val, 'data')) {
          dispatch({
            type: ACTIONS.UPDATE_USER_DATA,
            userInfo: val.data,
          });
          dispatch({
            type: ACTIONS.USER_DATA_LOADED,
          });
          dispatch(invokeTaskDataWebservice());
        } else {
          Alert.alert('Failed', VALIDATION_MSG.REQ_FAILED),[
            {text: 'Ok'},
          ];
        }
      } else {
        Alert.alert('Failed', VALIDATION_MSG.REQ_FAILED),[
          {text: 'Ok'},
        ];
      }
      
    })
    .catch((error) => {
      Alert.alert('Failed', error.message),[
        {text: 'Ok'},
      ];
    });
  });

};

/**
 * Invoke task webservice to get task information
 */
export const invokeTaskDataWebservice = () => {

  return ((dispatch) => {

    dispatch({
      type: ACTIONS.RESET_REFRESH_LOADING,
    });

    invokeGetWebService('42dffa34-3fd2-4bf9-b934-087afbb59f61').then((val) => {

      if (_.has(val, 'message')) {
        if (val.message === 'Success' && _.has(val, 'data')) {
          dispatch({
            type: ACTIONS.UPDATE_TASK_DATA,
            taskArray: val.data,
          });
          dispatch({
            type: ACTIONS.TASK_DATA_LOADED,
          });
         } else {
          Alert.alert('Failed', VALIDATION_MSG.REQ_FAILED),[
            {text: 'Ok'},
          ];
        }
      } else {
        Alert.alert('Failed', VALIDATION_MSG.REQ_FAILED),[
          {text: 'Ok'},
        ];
      }
      
    })
    .catch((error) => {
      Alert.alert('Failed', error.message),[
        {text: 'Ok'},
      ];
    });
  });

};
