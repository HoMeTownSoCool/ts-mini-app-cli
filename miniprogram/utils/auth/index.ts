import { EnumStorageKey } from '../../enum/index'
import { getLocal, removeLocal } from '../storage'

/**
 * 获取local中的 用户信息
 */
export const getUserInfo = function () {
  return getLocal(EnumStorageKey['user-info'])
}

/**
 * 移除local中的 用户信息
 */
export const removeUserInfo = function () {
  removeLocal(EnumStorageKey['user-info'])
}

/** 获取local中的 Token */
export const getToken = function () {
  return getLocal(EnumStorageKey['token'])
}
/** 去除local中的 Token */
export const removeToken = function () {
  removeLocal(EnumStorageKey['token'])
}
