export default function useAuth() {
  /** 微信登录 */
  function wxLogin() {
    wx.login({
      success: res => {
        console.log(res, '微信登录__wxlogin__success')
      }
    })
  }
  /** 获取用户档案 */
  function wxGetUserProfile() {
    wx.getUserProfile({
      desc: '用于展示用户信息',
      success: res => {
        console.log(res, '获取用户档案__wxGetUserProfile__success')
      }
    })
  }
  /** 检查session */
  function wxCheckSession() {
    wx.checkSession({
      success: res => {
        console.log(res, '检查session__wxCheckSession__success')
      }
    })
  }
  return {
    wxLogin,
    wxGetUserProfile,
    wxCheckSession
  }
}
