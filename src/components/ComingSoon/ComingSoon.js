// Footer container
import React from 'react';
import 'classnames';
import { NavLink } from 'react-router-dom';
import css from './ComingSoon.css';

const ComingSoon = () => (
  <div className={css.FlexPage}>
    <div className={['pb-0', 'container'].join(' ')}>
      <span onClick={() => window.history.back()} className={`${'backIcon'} ${css.backImg}`}>
       b
      </span>
      <span className={`pull-left  ${css.des_titlebar} ${css.mg_b__0}`}>
        Dashboard
      </span>
    </div>
    <div className={css.FlexFull}>
      <div className={css.FlexCenter}>
        <div className={css.ImgDiv}>
          v
        </div>
        <div className="mt-2">
          <p className={css.title}> Coming Soon </p>
          <p className={css.text}>
            We are working hard to build search for you :){' '}
          </p>
          <NavLink
            to={`${process.env.PUBLIC_URL}/home`}
            className="btn btn-primary btn-lg mt-5 mb-5 pl-4 pr-4"
          >
            Go to home
          </NavLink>
        </div>
        <div className="pb-2" />
      </div>
    </div>
  </div>
);

export default ComingSoon;
