import {actionTypes} from '@/store/action/student'

// 默认状态
const initialState = {
  datas: [],
  total: 0
}

/**
 * 控制查询结果的reducer
 * @param {*} state
 * @param {*} action
 */
export default function (state = initialState, {type, payload}) {
  switch (type) {
    case actionTypes.setStudentsAndTotal:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
