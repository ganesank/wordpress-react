// User List container
import React, { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../shared/axiosInstanceWpress';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import css from './TypeList.css';
import ErrorAction from '../../components/UI/ErrorAction/ErrorAction';
import PostBgrTitle from '../../components/Post/BgrTitle/BgrTitle';
import PostList from '../../components/Typelist/PostList/PostList';



class TypeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loadOnce: false
    };
  }

  componentDidMount() {
    const { type, slug } = this.props.match.params;
    this.props.onFetchPostTypeList(slug || '',  type || '');
  }

  componentWillUnmount() {
    this.props.onFetchPostTypeListReset();
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
          <PostBgrTitle titleContent={this.props.postListResponse} contentType={this.state.type} />
          <PostList postData={this.props.postListResponse} type={this.state.type} article="article" />
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
  postListResponse: state.posttypelist.posttypelistPageData,
  error: state.posttypelist.error,
  loading: state.posttypelist.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchPostTypeListReset: () =>
    dispatch(actions.fetchPostTypeListDataReset()),
  onFetchPostTypeList: (slug, posttype) =>
    dispatch(actions.fetchPostTypeListData(slug, posttype))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(TypeList, axios));
