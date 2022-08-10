/** 交互类 hooks */
export default function useInteractive() {
  /** 显示 WX 消息提示框 */
  function wxShowToast(options: WechatMiniprogram.ShowToastOption) {
    wx.showToast(options).catch(err => {
      throw err
    })
  }
  /** 隐藏 WX 消息提示框 */
  function wxHideToast(options: WechatMiniprogram.HideToastOption) {
    wx.hideToast(options).catch(err => {
      throw err
    })
  }
  return {
    wxShowToast,
    wxHideToast
  }
}
