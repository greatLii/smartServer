/*
 * @Author: greatLii
 * @Date: 2020-04-25 00:55:17
 * @LastEditors: greatLii
 * @LastEditTime: 2020-05-10 22:22:05
 * @Description : 路由设置
 */

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/swagger-ui.html#/', 302);
  // 在router中使用restFul API
  router.resources('users', '/api/v1/users', controller.users);
  // 短信服务
  router.get('servers', '/api/v1/common/message/:phone', controller.servers.messageinfo);
};
