import React, { Component } from 'react';
import cx from 'classnames';

export class StudentTray extends Component {
    render() {
        const { student, companies } = this.props;
        let companiesMarkup = companies.map((company, it) => {
            return (
                <div key={it + company.NAME } className={cx(
                    "Py(10px) Px(20px) D(f) Jc(sb)--med Jc(c)--sm Py(15px) Ai(c) Flw(w)",
                    {
                        "Bdbw(1px) Bdbc(#eeeeee) Bdbs(s)": it < (companies.length - 1)
                    }
                )}>
                    <div className="D(f) Ai(c) Jc(fs) Flxb(205px)">
                        <img className="Bdrs(3px)" src={company.LOGO} width="45px" />
                        <div className="Pstart(8px)">
                            <div className="Fz(16px)">{company.NAME}</div>
                            <div className="C(#707070) Pt(4px)">{company.POSITION}</div>
                        </div>
                    </div>
                    <div className="Ta(c) Flxb(150px) My(10px)--sm">
                        <div>Interviews</div>
                        <div className={cx(
                            'Fw(b)',
                            'Fz(22px)',
                            'Ta(c)',
                            {
                                'C(#1ac567)': company.NUMBER_OF_INTERVIEWS >= 3,
                                'C(#ffc300)': company.NUMBER_OF_INTERVIEWS == 2,
                                'C(#ba1233)': company.NUMBER_OF_INTERVIEWS < 2,
                            }
                        )}>{company.NUMBER_OF_INTERVIEWS}</div>
                    </div>
                    <div className="Ta(c) Flxb(150px) My(10px)--sm">
                        <div>Offer?</div>
                        <div className={cx(
                            'Fz(22px)',
                            {
                                'C(#1ac567) Fw(b)': company.OFFER_AMOUNT,
                                'C(#ba1233) Fw(b)': company.OFFER && !company.OFFER_AMOUNT
                            }
                        )}>{company.OFFER ? (company.OFFER_AMOUNT ? company.OFFER_AMOUNT : 'No') : 'In Progress'}</div>
                    </div>
                    <div className="Flxb(150px) Ta(c) My(10px)--sm">
                        <span className="C(#707070)">Contact: </span>
                        <a href="mailto:matthewebspector@gmail.com" className="C(black) Td(n) C(#0078ff):h Cur(p)">{company.RECRUITER}</a>
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
