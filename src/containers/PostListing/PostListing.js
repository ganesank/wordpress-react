// User List container
import React, { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../shared/axiosInstanceWpress';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import css from './PostListing.css';
import ErrorAction from '../../components/UI/ErrorAction/ErrorAction';
import PostList from '../../components/Typelist/PostList/PostList';
import PostBgrTitle from '../../components/Post/BgrTitle/BgrTitle';

class PostListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadOnce: false
    };
  }

  componentDidMount() {
    const { slug, page } = this.props.match.params;
    this.props.onFetchPostListData(slug || '', page || 1);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params !== this.props.match.params) {
      const { slug, page } = nextProps.match.params;
     
      this.props.onFetchPostListData(slug || '', page || 1);
    }
  }
  componentWillUnmount() {
    this.props.onFetchPostListDataReset();
  }


  render() {
    let PageAllContent = null;
    
    if (this.props.loading) {
      PageAllContent = <Spinner />;
    }
    if (this.props.errorMsg) {
      PageAllContent = <ErrorAction type="SomeThingWrong" action="back" />;
    }

    if (!this.props.loading && this.props.postListResponse) {
      if (!this.state.loadOnce) {
        this.state.loadOnce = true;
      }
      PageAllContent = (
        <Aux>
          <PostBgrTitle titleContent={this.props.postListResponse} contentType="Blog" />
          <PostList
            row="2"
            article="post"
            display="all"
            postData={this.props.postListResponse}
          />

        </Aux>);
    }


    return (
      <div className={css.homeContainer}>
        {this.state.isLoading}
        <div className="minhight90vh">
          {PageAllContent}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  postListResponse: state.postlist.postlistPageData,
  error: state.postlist.error,
  loading: state.postlist.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchPostListDataReset: () =>
    dispatch(actions.fetchPostListDataReset()),
  onFetchPostListData: (slug, page) =>
    dispatch(actions.fetchPostListData(slug, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PostListing, axios));
