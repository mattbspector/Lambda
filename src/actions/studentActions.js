import {STUDENT_LIST_SUCCESS} from './types';
import studentConfig from '../configs/data/student.json';

export const getStudentList = () => {
    const studentList = studentConfig.STUDENT_LIST || [];
    return (dispatch) => {
        dispatch({
            studentList: studentList,
            type: STUDENT_LIST_SUCCESS
        });
    };
};
