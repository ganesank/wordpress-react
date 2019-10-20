import React from "react";
import { Link } from "react-router-dom";
import css from "./PostList.css";
import { returnDateTime, PageTitleBgr } from "../../../shared/utility";

const PostItem = props => (
  <Link
    className={`${props.row} amp p-2 propsr${props.row}`}
    key={`${props.postitem.code}${props.type}`}
    id={`blogpost${props.postitem.id}`}
    to={`${process.env.PUBLIC_URL}/${props.type}/${props.postitem.slug}`}
    href={`${process.env.PUBLIC_URL}/${props.type}/${props.postitem.slug}`}
  >
    <div className="card-plain card-blog card">
      <div className="card-image">
        <img
          alt="..."
          className="img rounded img-raised"
          src={PageTitleBgr(props.postitem)}
        />
      </div>
      <div className="card-body">
        
        {props.postitem.date && (
          <span className="category text-info">
            {" "}
            {returnDateTime(props.postitem.date, "date")}
          </span>
        )}
        <h4
          className="card-title"
          dangerouslySetInnerHTML={{
            __html: props.postitem.title.rendered || ""
          }}
        />
        {/*
        <p
          className="card-description"
          dangerouslySetInnerHTML={{ __html: props.postitem.excerpt.rendered || ""  }}
       /> 
        <div className="author">
          <img
            alt="..."
            className="avatar img-raised"
            src="/blk-media/olivia.5e57125a.jpg"
          />
          <span className="ml-1"> {props.postitem.author.nickname}</span>
        </div>*/}
      </div>
    </div>
  </Link>
);
export default PostItem;
