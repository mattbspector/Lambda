import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentRow from './StudentRow';
import '../css/test-harness.css';
import '../css/main.css';
import { getStudentList } from '../actions/studentActions';

const mapStateToProps = state => ({
    ...state
});


export class App extends Component {
    componentDidMount() {
        this.props.getStudentList();
    }

    render() {
        const { studentList } = this.props.student || [];
        const studentMarkup = studentList.map((student) => {
            return (
            <div key={'student-' + student.KEY}>
                <StudentRow student={student} />
            </div> );
        });

        return(
            <div className="App Bgc(white)">
                <div className="W(100%) Bgc(white) Bdb(1px) Bdbc(#eee) Bdbs(s) Ta(s) W(100%) P(20px) Pstart(35px)">
                    <img
                        width="130px"
                        src='https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5cd0922159aa32213d6fd7d4_lambda-newlogo.png'
                    />
                </div>
                <div className="P(20px)">
                {studentMarkup}
                </div>
            </div>
        )
    };
}

export default connect(mapStateToProps, {getStudentList})(App);
