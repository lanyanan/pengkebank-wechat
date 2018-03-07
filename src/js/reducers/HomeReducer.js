import { CHANGE_DEMO_ACTION, CHANGE_SILDBAR_STATE } from '../Actions/homeAction';
import { RECEIVE_POSTS} from "../Actions/fetchAction";

let dataTree = {
    successMark: "当你看到这个信息的时候种子项目已经启动",
    sildBarState: false,
    listArr: [1,2,3],
    itemArr: [1,2,3,4],
    navArr: [{navName:"品牌列表"},{navName:"品牌列表"},{navName:"品牌列表"},{navName:"品牌列表"},{navName:"品牌列表"}]
}

export function HomeReducer(state = dataTree, action) {
    switch (action.type) {
        case CHANGE_DEMO_ACTION://改变demoAction
            return Object.assign({}, state, {data: action.data});
        case CHANGE_SILDBAR_STATE://改变sildbar的状态
             return Object.assign({}, state, {sildBarState: action.sildBarState});
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