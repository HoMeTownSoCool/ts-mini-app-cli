import { BASE_API } from '../../config/index'
import { createRequest } from './request'
/** 当前账号信息 */
const accountInfo = wx.getAccountInfoSync()
/** env类型 */
const env = accountInfo?.miniProgram?.envVersion
// /** 当前环境的接口请求地址 */
const baseUrl = BASE_API[env]
// 导出request
export const request = createRequest(baseUrl)
