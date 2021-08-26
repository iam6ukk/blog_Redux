import PropTypes from "prop-types";
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  onSubmit(props) {
    this.props.createPost(props).then(() => {
      // 블로그 포스트 생성
      // 새로운 패스로 네비게이팅
      this.context.router.push("/");
    });
    // 액션 생성자 호출, 이는 프로미스를 반환하는데 그러고 나서 then 구문의 함수를 실행함
  }

  render() {
    const {
      fields: { title, categories, contnet },
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <div
          className={`form-group ${
            title.touched && title.invalid ? "has-danger" : ""
          }`}
        >
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          {/* 모든 프로퍼티를 오브젝트의 인풋 안에 보이게 함 */}
          <div className="text-help">{title.touched ? title.error : ""}</div>
        </div>
        <div
          className={`form-group ${
            title.touched && categories.invalid ? "has-danger" : ""
          }`}
        >
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {title.touched ? categories.error : ""}
          </div>
        </div>
        <div
          className={`form-group ${
            title.touched && contnet.invalid ? "has-danger" : ""
          }`}
        >
          <label>Content</label>
          <textarea className="form-control" {...contnet} />
          <div className="text-help">{title.touched ? contnet.error : ""}</div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sumbit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancle
        </Link>
      </form>
    );
  }
}

// 유효성 검사
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a username";
  }

  if (!values.categories) {
    errors.categories = "Enter a categories";
  }

  if (!values.contnet) {
    errors.contnet = "Enter a contnet";
  }

  return errors;
  // 폼이 타당하면 문구 사라짐
}

export default reduxForm(
  {
    form: "PostsNewForm",
    fields: ["title", "categories", "content"],
    validate,
  },
  null,
  { createPost }
)(PostsNew);
// 인풋이 변할 때마다, 인풋의 새 값이 글로벌 어플리케이션 스테이트로 세팅됨
// 유저 타이핑 시, 이것이 어플리케이션 스테이트로 저장되고 새 스테이트는 form과 formReducer가 됨
