// url을 매핑하여, 해당 컴포넌트를 보여주는 것을 결정함

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    {/* 라우트가 포워드 슬래시이면 App과 PostIndex를 보여줌 
        기본 라우트로 보여지도록 함 */}
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
    {/* 포스트의 id를 파라미터로  */}
  </Route>
);

// 해당 패스가 들어오면 App 컴포넌트가 보여짐
// 중첩 라우터의 경우, 중첩된 라우터에 방문하면 자식 컴포넌트로 App이 전달됨
// 이는 this.props.children으로 표시함
