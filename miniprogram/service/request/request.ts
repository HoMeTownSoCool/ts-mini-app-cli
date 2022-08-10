import {
  REQUEST_TIMEOUT,
  DEFAULT_REQUEST_DATA_TYPE,
  HTTP_ERROR_STATUS,
  HTTP_SUCCESS_STATE,
  NO_ERROR_MSG_CODE,
  BACKEND_SUCCESS_CODE
} from '../../constants/index'
type IAnyObject = WechatMiniprogram.IAnyObject
type HttpErrorStatusKey = keyof typeof HTTP_ERROR_STATUS
/** 后端返回的数据结构 */
interface BackEndResData {
  data: WechatMiniprogram.IAnyObject
  code: number
  msg: string
}
/**
 * 创建请求器
 * @param baseUrl 基础api请求地址
 * @returns Promise
 */
export const createRequest = function (baseUrl: string) {
  /** 请求器构造 */
  const request = function (options: WechatMiniprogram.RequestOption): Promise<BackEndResData | Error> {
    const url = baseUrl + options.url
    const method = options.method
    const data = options.data
    const header = {}
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method,
        data,
        timeout: REQUEST_TIMEOUT,
        dataType: DEFAULT_REQUEST_DATA_TYPE,
        header,
        success: res => {
          if (res.statusCode === HTTP_SUCCESS_STATE) {
            const backEndResData = res.data as BackEndResData // 后端返回的数据
            if (backEndResData.code !== BACKEND_SUCCESS_CODE && !NO_ERROR_MSG_CODE.includes(backEndResData.code)) {
              // 后端报错
            }
            resolve(backEndResData)
          } else {
            // HTTP状态错误
            reject(new Error(HTTP_ERROR_STATUS[res.statusCode as HttpErrorStatusKey]))
          }
        },
        fail: err => {
          const { errMsg } = err
          reject(new Error(` ${errMsg}`))
        }
      })
    })
  }

  /** GET 请求 */
  const requestGet = function (url: string, data?: IAnyObject) {
    return request({
      url,
      method: 'GET',
      data
    })
  }

  /** POST 请求 */
  const requestPost = function (url: string, data?: IAnyObject) {
    return request({
      url,
      method: 'POST',
      data
    })
  }

  /** PUT 请求 */
  const requestPut = function (url: string, data?: IAnyObject) {
    return request({
      url,
      method: 'PUT',
      data
    })
  }

  /** DELETE 请求 */
  const requestDelete = function (url: string, data?: IAnyObject) {
    return request({
      url,
      method: 'DELETE',
      data
    })
  }

  return {
    get: requestGet,
    post: requestPost,
    put: requestPut,
    delete: requestDelete
  }
}
