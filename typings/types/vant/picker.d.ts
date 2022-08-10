declare namespace Vant {
  /** picker选项 */
  type PickerObjectOption = {
    /** 显示文本 */
    text?: string | number
    /** 是否禁用 */
    disabled?: boolean
    /** 自定义key */
    [key: PropertyKey]: any
  }
}
