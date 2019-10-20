// Account Details Container
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../store/actions';
import css from './PostDetails.css';

import axios from '../../shared/axiosInstanceWpress';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import PostTitle from '../../components/Post/Title/Title';
import PostContent from '../../components/Post/Content/Content';


class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { slug, type } = this.props.match.params;
    console.log('PostDetails', slug)
    this.props.onFetchPdpData(type || '', slug || '');
  }

  render() {
    let pageContent = null;
    if (this.props.loading) {
      pageContent = <Spinner />;
    }
    console.log('postDetailPageData', this.props.postDetailPageData)
    if (!this.props.loading && this.props.postDetailPageData) {
     
      pageContent = (
        <Aux>
          <PostTitle content={this.props.postDetailPageData[0]} />
          <PostContent content={this.props.postDetailPageData[0]} />
        </Aux>);
    }
    return (
      <div className={css.postContainer}>
        <div className="minhight90vh">
          {pageContent}
        </div>
      </div>
    );
  }
}
const mapSateToProps = state => ({
  postDetailPageData: state.postdetail.postDetailPageData,
  error: state.postdetail.error,
  loading: state.postdetail.loading,
});

const mapDispatchToProps = dispatch => ({
  onFetchPdpData: (type, slug) => dispatch(actions.fetchPostDetail(type, slug)),
});


const postDetailConnect = withErrorHandler(PostDetails, axios, 'otpError');

export default connect(mapSateToProps, mapDispatchToProps)(postDetailConnect);
