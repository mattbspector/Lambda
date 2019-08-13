import {
    STUDENT_LIST_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    studentList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_LIST_SUCCESS:
            return { ...state, studentList: action.studentList };
        default:
            return state;
    }
};
