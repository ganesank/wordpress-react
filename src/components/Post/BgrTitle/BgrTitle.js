/* Footer Component More Options JSX  */
import React from "react";
import { NavLink } from "react-router-dom";
import { returnDateTime, PageTitleBgr } from "../../../shared/utility";

const BgrTitle = props => (
  <section className="section section-navbars bgrTitleContainer">
    <img
      alt="..."
      className="path"
      src={require("../../../assets/img/path3.png")}
    />

    <div className="bgrTitleContent">
      <div className="container">
        {props.titleContent && props.titleContent.title ? (
          <h1
            className="jumbotron-heading"
            dangerouslySetInnerHTML={{
              __html: props.titleContent.title.rendered || ""
            }}
          />
        ) : (
          <h1
            className="jumbotron-heading"
            dangerouslySetInnerHTML={{ __html: props.contentType || "" }}
          />
        )}

        <p className="lead text-muted">
          {props.titleContent &&
          props.titleContent.author &&
          props.titleContent.author.nickname ? (
            <span> {props.titleContent.author.nickname} </span>
          ) : (
            <span className="AuthorInvalid" />
          )}
          {props.titleContent && props.titleContent.date ? (
            <span> {returnDateTime(props.titleContent.date, "date")}</span>
          ) : (
            <span className="DateInvalid" />
          )}
          {props.titleContent &&
            props.titleContent.categories &&
            props.titleContent.categories.map((entry, index) => (
              <NavLink
                index={index}
                to={`${process.env.PUBLIC_URL}/category/${entry.slug}`}
                key={entry.entryNumber}
              >
                {" "}
                {entry.title}
              </NavLink>
            ))}
        </p>
      </div>
    </div>
  </section>
);

export default BgrTitle;
