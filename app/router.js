'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/api/v1/users', 302);
  // 在router中使用restFul API
  router.resources('users','/api/v1/users',controller.users);
};
