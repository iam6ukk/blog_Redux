import { FETCH_POSTS, FETCH_POST } from "../actions/index";

const INITIAL_STATE = { all: [], post: null };
// all: 인덱스의 블로그 포스트 배열, post: 개별 포스트

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    // 새 오브젝트는 현재 스테이트와 프로퍼티가 추가됨
    default:
      return state;
  }
}
