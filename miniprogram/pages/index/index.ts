import { fetchGetTestList } from './../../service/api/test'
// 获取应用实例
// const app = getApp<IAppOption>()
Page({
  pagination: {},
  data: {
    name: '打开',
    city: '',
    cityColumns: <Vant.PickerObjectOption[]>[
      { text: '北京', disabled: true, id: 1 },
      { text: '上海', id: 2 },
      { text: '广州', id: 3 },
      { text: '深圳', id: 4 },
      { text: '西安', id: 5 },
      { text: '天津', id: 6 },
      { text: '杭州', id: 7 },
      { text: '成都', id: 8 },
      { text: '重庆', id: 9 }
    ]
  },
  onLoad() {
    void this.getTestList()
  },

  /** select popup点击确定之后的回调 */
  onSelectComfirm(event: WechatMiniprogram.CustomEvent) {
    const { value } = event.detail
    this.setData({
      city: value?.text as string
    })
  },

  /** 单击按钮 */
  onClickBtn() {
    const selectPopupOpt = this.selectComponent('#select-popup')
    selectPopupOpt?.onShow()
  },

  /** 获取数据 */
  async getTestList() {
    try {
      const res = await fetchGetTestList()
      console.log(res, '请求成功')
    } catch (error) {
      throw new Error(error as string | undefined)
    }
  }
})
