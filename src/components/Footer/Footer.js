// Footer Component
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import classnames from "classnames";
import { Button, NavItem, Nav, Container, Row, Col } from "reactstrap";

import * as appConstants from "../../shared/appConstants";
import css from "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowFooterTop: false,
      thisYear: new Date().getFullYear()
    };
  }

  render() {
    return (
      <footer
        className={classnames({
          footer: true,
          [css.footerArea]: true,
          [css.pullp2k]: this.state.ShowFooterTop
        })}
      >
       
        <Container>
        <hr className="thick" />{" "}
          <Row>
            <Col md="3">
              <NavLink
                to={`${process.env.PUBLIC_URL}/`}
                className={css.logofooter}
              >
                <h1 className="title"> {appConstants.appTitle}</h1>
              </NavLink>
              <p
                class="slogan"
                dangerouslySetInnerHTML={{
                  __html: appConstants.footerDescription || ""
                }}
              />

              <p>
                <small>&copy; {this.state.thisYear} .</small>
                <small
                  class="slogan"
                  dangerouslySetInnerHTML={{
                    __html: appConstants.footerCopyRightContent || ""
                  }}
                />
              </p>
            </Col>
            <Col md="9">
              <h3
                dangerouslySetInnerHTML={{
                  __html: appConstants.footerTitle || ""
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md="3"> </Col>
            <Col md="3">
              <h4 className="title titleHighlight"> Start a conversation</h4>

              {appConstants.connectionLinks &&
              appConstants.connectionLinks.length > 0 ? (
                <div className={css.navMenu}>
                  <ul className="nav">
                    {appConstants.connectionLinks.map((menuitem, index) => (
                      <li
                        key={`connectionLinks${menuitem.id}`}
                        className="nav-item"
                      >
                        {" "}
                        <Link
                          to={`${menuitem.link}`}
                          href={menuitem.link}
                          target="_blank"
                          className="nav-link"
                        >
                          {menuitem.name}{" "}
                        </Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className={css.no_items} />
              )}
            </Col>
            <Col md="3">
              <h4 className="title titleHighlight"> Other Links</h4>

              {appConstants.footerLinks &&
              appConstants.footerLinks.length > 0 ? (
                <div className={css.navMenu}>
                  <ul className="nav">
                    {appConstants.footerLinks.map(menuitem => (
                      <li
                        key={`footerLinks${menuitem.id}`}
                        className="nav-item"
                      >
                        {" "}
                        <NavLink
                          to={`${process.env.PUBLIC_URL}${menuitem.link}`}
                          className="nav-link"
                        >
                          {menuitem.name}{" "}
                        </NavLink>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className={css.no_items} />
              )}
            </Col>
            <Col md="3">
              <h4 className="title titleHighlight"> Social</h4>

              {appConstants.socialLinks &&
              appConstants.socialLinks.length > 0 ? (
                <div className="footer-social d-flex align-items-center">
                  <ul className="nav">
                  {appConstants.socialLinks.map((menuitem, index) => (
                    <li
                    key={`footerLinks${menuitem.id}`}
                    className="nav-item"
                  >
                    <Link className="nav-link"
                      key={`socialLinks${menuitem.id}`}
                      href={menuitem.link}
                      to={menuitem.elink}
                      target="_blank"
                    >
                      {" "}
                      <i className={` fab ${menuitem.icon} `} />{" "}  {menuitem.title}
                    </Link>
                    </li>
                  ))}
                  </ul>
                </div>
              ) : (
                <div className={css.no_items} />
              )}
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default withRouter(Footer);
