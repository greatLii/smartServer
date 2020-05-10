/*
 * @Author: greatLii
 * @Date: 2020-04-25 00:55:17
 * @LastEditors: greatLii
 * @LastEditTime: 2020-05-10 16:41:28
 * @Description : 插件配置项
 */

/** @type Egg.EggPlugin */
module.exports = {
  // mysql
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc',
  },
};
