import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";
import { reducer as formReducer } from "redux-form";
// reducer를 불러오는데 formReducer 변수로 생성

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
});

export default rootReducer;
