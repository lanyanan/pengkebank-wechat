import { CHANGE_DEMO_ACTION } from '../Actions/homeAction';
import { RECEIVE_POSTS} from "../Actions/fetchAction";

let dataTree = {
  successMark: "当你看到这个信息的时候种子项目已经启动",
}

export function HomeReducer(state = dataTree, action) {
  switch (action.type) {
    case CHANGE_DEMO_ACTION://改变demoAction
      return Object.assign({}, state, {data: action.data});
    case RECEIVE_POSTS:
      return Object.assign({}, state, action.posts.msg, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}