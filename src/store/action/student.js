export const actionTypes = {
  //设置学生查询结果数组和总数
  setStudentsAndTotal: 'setStudentsAndTotal'
}

export function setStudentsAndTotal(arr, total) {
  return {
    type: actionTypes.setStudentsAndTotal,
    payload: {
      datas: arr,
      total
    }
  }
}
