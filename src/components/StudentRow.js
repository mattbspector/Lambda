import React, { Component } from 'react';
import StudentTray from './StudentTray';
import cx from 'classnames';


export class StudentRow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showStudentDrawer: false
        };

        this.toggleStudentDrawer = this.toggleStudentDrawer.bind(this);
    }

    toggleStudentDrawer () {
        const currDrawer = this.state.showStudentDrawer;
        this.setState({showStudentDrawer: !currDrawer});
    }

    render() {
        const { showStudentDrawer } = this.state;
        const { student } = this.props;
        const progressStyle = {width: student.PROGRESS + '%'};
        const restOfProgress = {width: 100 - student.PROGRESS + '%'};
        const companies = student.COMPANIES || [];

        const companyMarkup = companies.map((company) => {
            return (
                <div className="Px(5px)">
                    <img className="Bdrs(3px)" src={company.LOGO} width="40px" />
                </div>
            );
        });

        return(
            <div className="W(80%) Mx(a)">
                <div
                    onClick={this.toggleStudentDrawer}
                    className={cx(
                        "StudentRow D(f) Jc(sb)--med Jc(c)--sm Ai(c) Flw(w) Mt(5px) Cur(p) Bgc(#e9eaec) Bgc(#f5f5f5):h P(20px) Bdcl(c) Bd(1px) Bdc(#eeeeee) Bds(s)",
                        {
                            'Bdrs(6px)': !showStudentDrawer,
                            'Bdrststart(6px) Bdrstend(6px)': showStudentDrawer
                        }
                    )}>
                    <div className="D(f) Ai(c) nameRow">
                        <div className="W(100px) Ta(c)">
                            <img src={student.IMAGE} height="70px" />
                        </div>
                        <div className="Pstart(10px)">
                            <div className="Fz(16px)">{student.NAME}</div>
                            <div className="C(#ba1233) Mt(5px)">{student.TRACK}</div>
                        </div>
                    </div>
                    <div className="Ta(c) My(10px)--sm">
                        <div>Course Progress</div>
                        <div className="W(100%) Mt(15px)">
                            <div className="Pos(r) D(ib) Bgc(#1ac567) H(10px) Bdrststart(5px) Bdrsbstart(5px)" style={progressStyle}>
                                <div className="Pos(a) W(0) H(0) Bdstartw(5px) Bdstartc(t) Bdstarts(s) Bdendw(5px) Bdendc(t) Bdends(s) Bdtw(8px) Bdtc(#1ac567) Bdts(s) End(-5px) T(-12px)"></div>
                            </div>
                            <div className="D(ib) Bgc(white) H(10px) Bdrstend(5px) Bdrsbend(5px)" style={restOfProgress}></div>
                        </div>
                    </div>
                    <div className="Ta(c) My(10px)--sm">
                        <div>Companies</div>
                        <div className="D(f) Mt(7px)">
                            {companyMarkup}
                        </div>
                    </div>
                </div>
                <div>
                {
                    showStudentDrawer ?
                        <StudentTray student={student} companies={companies} />
                        : null
                }
                </div>
            </div>
        )
    };
}

export default (StudentRow);
