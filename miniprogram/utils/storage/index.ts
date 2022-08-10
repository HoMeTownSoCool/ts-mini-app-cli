/** 设置缓存 */
export const setLocal = function <T>(key: string, data: T) {
  wx.setStorageSync(key, data)
}

/** 获取缓存 */
export const getLocal = function <T>(key: string): T {
  return wx.getStorageSync(key)
}

/** 移除缓存 */
export const removeLocal = function (key: string) {
  wx.removeStorageSync(key)
}

/** 清除缓存 */
export const clearLocal = function () {
  wx.clearStorageSync()
}
