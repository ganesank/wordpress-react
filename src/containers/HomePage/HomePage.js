// User List container
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import * as actions from "../../store/actions";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../shared/axiosInstanceWpress";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import ErrorAction from "../../components/UI/ErrorAction/ErrorAction";

import PostList from "../../components/Typelist/PostList/PostList";

import serviceImage from "./../../assets/info-img.jpg";
import * as appConstants from "../../shared/appConstants";

let initialItemsData = [];
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadOnce: false
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    // this.state.slug = slug || '';
    this.props.onFetchPostListData(slug || "");
    this.props.onFetchPostTypeList("", "portfolio");
  }

  componentWillUnmount() {
    this.props.onFetchPostListDataReset();
    this.props.onFetchPostTypeListReset();
  }

  render() {
    let PageAllContent = null;
    let PortfolioContent = null;
    if (this.props.loading) {
      PageAllContent = <Spinner />;
    }
    if (this.props.errorMsg) {
      PageAllContent = <ErrorAction type="SomeThingWrong" action="back" />;
    }
    if (!this.props.loading && this.props.portfolioListResponse) {
      PortfolioContent = (
        <Aux>
          <PostList
            row="3"
            article="article"
            postData={this.props.portfolioListResponse}
            type="portfolio"
            cls=""
            showDesc="true"
            limit="3"
          />
        </Aux>
      );
    }
    if (!this.props.loading && this.props.postListResponse) {
      if (!this.state.loadOnce) {
        initialItemsData = this.props.postListResponse; // .posts.slice(0, 3)
        this.state.loadOnce = true;
      }
      PageAllContent = (
        <Aux>
          <section className={`relative page-header`}>
            <img
              alt="..."
              className="path"
              src={require("../../assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../../assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("../../assets/img/cercuri.png")}
            />
            <div className="container">
              <div
                className={`row fullscreen d-flex align-items-center justify-content-start  `}
              >
                <div className="banner-content col-lg-7 col-md-12">
                  <p> Hi, my name is</p>

                  <h1 className="bigTitle titleHighlight m-1">
                    {" "}
                    Ganesan Karuppaiya.
                  </h1>
                  <h2 className="bigTitle m-1">I build things for the web. </h2>
                  <div>
                    <p>
                      {" "}
                      I'm a UI/ UX engineer based in Chennai, IN.
                      <br />
                      Specializing in building (and occasionally designing)
                      exceptional, high-quality websites and applications with
                      clean and sharp interfaces and innovator focusing
                      business, users and success
                    </p>
                  </div>
                  <a href="as" className="btn-simple btn-round btn btn-primary">
                    {" "}
                    MORE ABOUT ME{" "}
                  </a>
                  <a href="as" className="btn-simple btn-round btn btn-primary">
                    {" "}
                    GET IN TOUCH{" "}
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className={`relative about-section fullscreen pb-5 `}>
            <img
              alt="..."
              className="path"
              src={require("../../assets/img/path4.png")}
            />
            <div className="container">
              <div className="row d-flex justify-content-end align-items-center">
                <div className="col-lg-3 col-md-12 info-left no-padding pr-5">
                  <img src={serviceImage} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-12 info-right no-padding">
                  <div>
                    <hr className="line-info " /> <br />
                    <h5 className="card-category">ABOUT ME</h5>
                    <CardTitle tag="h2">
                      {" "}
                      In Short, Creative Designer,
                      <br /> UI/UX Designer &amp; Full Stack Developer
                    </CardTitle>
                    <p>
                      I enjoys building things that live on the internet. I
                      develop exceptional websites and web apps that provide
                      intuitive, pixel-perfect user interfaces with efficient
                      and modern backends.
                    </p>
                    <p>
                      Graduated from Anna University, Started carieer in a
                      startup company, Currently working in Infosys. Across all
                      the organizations, I work on a wide variety of interesting
                      and meaningful projects on a daily basis
                    </p>
                    <p>
                      Here are a few technologies I've been working with
                      recently:
                    </p>
                    <ul className="skillsContainer">
                     
                      {appConstants.recentTech.map((menuitem, index) => (
                        <li key={`${menuitem.id}`}>
                          {menuitem.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`relative fullscreen  service-section pb-5 `}>
            <img
              alt="..."
              className="path"
              src={require("../../assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../../assets/img/path5.png")}
            />
            <img
              alt="..."
              className="path3"
              src={require("../../assets/img/path2.png")}
            />
            <div className={`overlay pb-5 `} />

            <Container>
              <Row className="row d-flex justify-content-left text-left">
                <Col className="text-center" sm="12">
                  <hr className="line-info m-auto" /> <br />
                  <h5 className="card-category">WHAT I DO</h5>
                  <CardTitle tag="h2">
                    {" "}
                    Building Brands, Designing Interface <br />
                    and User Experience and more
                  </CardTitle>
                </Col>
              </Row>

              <Row className="row-grid justify-content-center">
                {appConstants.ServiceThings.map((menuitem, index) => (
                  <Col
                    className="col-lg-3 col-md-3"
                    key={`connectionLinks ${menuitem.id}`}
                  >
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">{menuitem.name}</h4>
                      <hr className="line-primary" />
                      <p>{menuitem.values}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
          <section className={`relative fullscreen pb-5 `}>
          <img
              alt="..."
              className="path"
              src={require("../../assets/img/path5.png")}
            />
            <Container>
              <Row className="row d-flex justify-content-left text-left">
                <Col className="text-center" sm="12">
                  <hr className="line-info m-auto" /> <br />
                  <h5 className="card-category">MY WORKS</h5>
                  <CardTitle tag="h2">
                    {" "}
                    Some Things I've Built <br />
                    in recent days
                  </CardTitle>
                </Col>
              </Row>

              {PortfolioContent}
            </Container>
          </section>
          <section className={`relative fullscreen pb-5 `}>

          <Container>
              <Row className="row d-flex justify-content-left text-left">
                <Col className="text-left" sm="12">
                  <hr className="line-info " /> <br />
                  <h5 className="card-category">BLOG</h5>
                  <CardTitle tag="h2">
                    {" "}
                    Some Things I've written  <br />
                    rarely and randomly
                  </CardTitle>
                </Col>
              </Row>
              <PostList
                postData={initialItemsData}
                row="3"
                type="posts"
                article="post"
                limit="3"
              />
            </Container>
          </section>
        </Aux>
      );
    }

    return (
      <div className="landing-page">
        {this.state.isLoading}
        <div className="minhight90vh">{PageAllContent}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postListResponse: state.postlist.postlistPageData,
  portfolioListResponse: state.posttypelist.posttypelistPageData,
  error: state.postlist.error,
  loading: state.postlist.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchPostListDataReset: () => dispatch(actions.fetchPostListDataReset()),
  onFetchPostListData: slug => dispatch(actions.fetchPostListData(slug)),
  onFetchPostTypeListReset: () =>
    dispatch(actions.fetchPostTypeListDataReset()),
  onFetchPostTypeList: (slug, posttype) =>
    dispatch(actions.fetchPostTypeListData(slug, posttype))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(HomePage, axios));
