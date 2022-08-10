import { EnumDataType } from '../../enum/index'

export function isNumber(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.number
}
export function isString(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.string
}
export function isBoolean(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.boolean
}
export function isNull(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.null
}
export function isUndefined(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.undefined
}
export function isObject(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.object
}
export function isArray(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.array
}
export function isDate(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.date
}
export function isRegExp(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.regexp
}
export function isSet(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.set
}
export function isMap(data: unknown) {
  return Object.prototype.toString.call(data) === EnumDataType.map
}
export function isEmpty(data: string | WechatMiniprogram.IAnyObject | Array<unknown>) {
  return (
    (isString(data) && data.length === 0) || (isArray(data) && data.length === 0) || isNull(data) || isUndefined(data)
  )
}
