import React, { Component } from "react";
// import { reduxForm } from "redux-form";
// import { createPost } from "../actions/index";

class PostsNew extends Component {
  render() {
    // const {
    //   fields: { title, categories, contnet },
    //   handleSubmit,
    // } = this.props;
    return (
      <div>Create A New Post</div>
      //   <form onSubmit={handleSubmit(this.props.createPost)}>
      //     <h3>Create A New Post</h3>
      //     <div className="form-group">
      //       <label>Title</label>
      //       <input type="text" className="form-control" {...title} />
      //       {/* 모든 프로퍼티를 오브젝트의 인풋 안에 보이게 함 */}
      //     </div>
      //     <div className="form-group">
      //       <label>Categories</label>
      //       <input type="text" className="form-control" {...categories} />
      //     </div>
      //     <div className="form-group">
      //       <label>Content</label>
      //       <textarea className="form-control" {...contnet} />
      //     </div>

      //     <button type="submit" className="btn btn-primary">
      //       Sumbit
      //     </button>
      //   </form>
    );
  }
}

export default PostsNew;
// reduxForm(
//   {
//     form: "PostsNewForm",
//     fields: ["title", "categories", "content"],
//   },
//   null,
//   { createPost }
// )(PostsNew);
// 인풋이 변할 때마다, 인풋의 새 값이 글로벌 어플리케이션 스테이트로 세팅됨
// 유저 타이핑 시, 이것이 어플리케이션 스테이트로 저장되고 새 스테이트는 form과 formReducer가 됨
