import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}

        {/* 자식 컴포넌트를 보여주지 위해 App에서 this.props.children을 랜더링해야 함 */}
      </div>
    );
  }
}
