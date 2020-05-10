/*
 * @Author: greatLii
 * @Date: 2020-05-10 10:18:34
 * @LastEditors: greatLii
 * @LastEditTime: 2020-05-10 10:26:18
 * @Description : app的扩展
 */
var uuid = require('uuid')
module.exports = {
  getUUID() {
    return uuid.v1().replace('-','')
  },
};