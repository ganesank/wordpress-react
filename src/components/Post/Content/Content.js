/* Footer Component More Options JSX  */
import React from "react";

const Content = props => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 ">
          {props.content && props.content.content ? (
            <div
              dangerouslySetInnerHTML={{
                __html: props.content.content.rendered || ""
              }}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
    <div className="container" />
  </section>
);

export default Content;
