/**
 * proerties:
 *  @columns {Vant.PickerObjectOption[]} picker option
 *
 * events:
 *  @onSelectConfirmCb Function 点击确定之后的回调
 *  @onSelectCancelCb Function 点击取消之后的回调
 *  @onSelectChangeCb Function 选择器发生改变的回调
 */
const componentOptions: App.BaseComponent = {
  /**
   * 组件的属性列表
   */
  properties: {
    columns: {
      type: Array,
      default: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    /** 是否打开 */
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSelectConfirm(event: WechatMiniprogram.CustomEvent) {
      this.triggerEvent('onSelectConfirmCb', event.detail)
      this.onClose()
    },
    onSelectCancel() {
      this.onClose()
    },
    onSelectChange(event: WechatMiniprogram.CustomEvent) {
      this.triggerEvent('onSelectChangeCb', event.detail)
    },
    /** 关闭popup */
    onClose() {
      this.setData({
        show: false
      })
    },
    /** 打开popup */
    onShow() {
      this.setData({
        show: true
      })
    }
  }
}
Component(componentOptions)
