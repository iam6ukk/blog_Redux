// 인덱스 라우터에 블로그 포스트를 보여주는 것을 도움

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  // 컴포넌트가 처음 DOM에 랜더링 되자마자 자동적으로 호출
  // 리랜더링될 때 다시 호출하지 않음, 한번만 호출됨

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
