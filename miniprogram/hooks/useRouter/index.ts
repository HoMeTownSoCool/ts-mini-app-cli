export default function useRouter() {
  /**
   * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
   * @param options https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html
   */
  function wxNavigateTo(options: WechatMiniprogram.NavigateToOption) {
    wx.navigateTo(options).catch(err => {
      throw err
    })
  }
  /**
   * 关闭当前页面，返回上一页面或多级页面
   * @param options https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html
   */
  function wxNavigateBack(options: WechatMiniprogram.NavigateBackOption) {
    wx.navigateBack(options).catch(err => {
      throw err
    })
  }
  return {
    wxNavigateTo,
    wxNavigateBack
  }
}
