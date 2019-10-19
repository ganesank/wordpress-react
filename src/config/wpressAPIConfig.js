//WPRESS API Configuration
//TODO: update actual urls
const wpressAPIConfig = () => {
  return {
    DEFAULT_HEADERS: {},
    
    FETCH_HOME_PAGE_DATA: {
      url:
        '/posts'
    },
    FETCH_POSTLIST_PAGE_DATA: {
      url:
        '/posts'
    },
    FETCH_CATEGORYLIST_PAGE_DATA: {
      url:
        '/posts?category='
    },
    FETCH_POSTDETAIL_PAGE_DATA: {
      url:
        'wp-json/wp/v2/posts?slug='
    },
    FETCH_POSTTYPELIST_PAGE_DATA: {
      url:
        '/'
    },
    FETCH_PAGE_DETAIL_DATA: {
      url:
      '/pages'
    },
    
  };
};

export default wpressAPIConfig;