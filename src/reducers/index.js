import { combineReducers } from 'redux';
import tweet from './tweetReducer';
import student from'./studentReducer';

export default combineReducers({
    tweet,
    student
});
