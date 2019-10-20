// Footer Component
import React, { Component } from "react";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import { withRouter } from "react-router";
import classnames from "classnames";
import * as appConstants from "../../shared/appConstants";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: ""
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <header>
        <Navbar
          className={"fixed-top " + this.state.color}
          color-on-scroll="100"
          expand="lg"
        >
          <Container>
            <div className="navbar-translate">
              <NavbarBrand
                data-placement="bottom"
                to="/"
                href="/"
                title={appConstants.appTitle}
              >
                <span>{appConstants.appTitle} </span>
                
              </NavbarBrand>
              <button
                aria-expanded={this.state.collapseOpen}
                className="navbar-toggler navbar-toggler"
                onClick={this.toggleCollapse}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <Collapse
              className={"justify-content-end " + this.state.collapseOut}
              navbar
              isOpen={this.state.collapseOpen}
              onExiting={this.onCollapseExiting}
              onExited={this.onCollapseExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a >
                    {appConstants.appTitle}
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button
                      aria-expanded={this.state.collapseOpen}
                      className="navbar-toggler"
                      onClick={this.toggleCollapse}
                    >
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              {appConstants.headerMenu && appConstants.headerMenu.length > 0 ? (
                <Nav navbar>
                  {appConstants.headerMenu.map((menuitem, index) => (
                    <NavItem key={`headerMenu${menuitem.id}`} className="p-0">
                      <NavLink
                        href={`${process.env.PUBLIC_URL}${menuitem.link}`}
                        to={`${process.env.PUBLIC_URL}${menuitem.link}`}
                      >
                        {menuitem.name}{" "}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              ) : (
                <Nav />
              )}
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default withRouter(Header);
