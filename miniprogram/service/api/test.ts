import { request } from '../request/index'
/**
 * 测试接口
 */
export const fetchGetTestList = function () {
  return request.get('/testList')
}
