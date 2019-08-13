import React, { Component } from 'react';
import cx from 'classnames';

export class StudentTray extends Component {
    render() {
        const { student, companies } = this.props;
        let companiesMarkup = companies.map((company, it) => {
            return (
                <div className={cx(
                    "Py(10px) Px(20px) D(f) Jc(sb) Py(15px)",
                    {
                        "Bdbw(1px) Bdbc(#eeeeee) Bdbs(s)": it < (companies.length - 1)
                    }
                )}>
                    <div className="D(f) Ai(c) Jc(fs)">
                        <img className="Bdrs(3px)" src={company.LOGO} width="45px" />
                        <div className="Pstart(8px)">
                            <div className="Fz(16px)">{company.NAME}</div>
                            <div className="C(#707070) Pt(4px)">{company.POSITION}</div>
                        </div>
                    </div>
                </div>
            );
        })

        return(
            <div className="StudentTray W(100%) Bgc(#f5f5f5) Bdrsbstart(6px) Bdrsbend(6px)">
                {companiesMarkup}
            </div>
        )
    };
}

export default (StudentTray);
