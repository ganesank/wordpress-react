/* Footer Component More Options JSX  */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { returnDateTime } from '../../../shared/utility';

const Title = props => (
  <section className="section section-navbars bgrTitleContainer">
     <img
      alt="..."
      className="path"
      src={require("../../../assets/img/path3.png")}
    />
    <div className="bgrTitleContent">
    <div className="container">
      <h1 className="jumbotron-heading" dangerouslySetInnerHTML={{ __html: props.content.title.rendered || "" || ''}} />
      <p className="lead text-muted">
        {props.content.author && props.content.author.nickname ? <span > {props.content.author.nickname} </span> : <span className="AuthorInvalid" />}
        {props.content.date ? <span> {returnDateTime(props.content.date, 'date')}</span> : <span className="DateInvalid" />}
        {props.content.categories && props.content.categories.map((entry, index) => (
          <NavLink
            index={index}
            to={`${process.env.PUBLIC_URL}/category/add-money`}
            key={entry.entryNumber}
          > {entry.title}
          </NavLink>
              ))}
      </p>
    </div>
    </div>
  </section>
);

export default Title;
