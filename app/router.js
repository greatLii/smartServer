'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 声明全局的数据库连接
  app.beforeStart(async ()=>{
    const mysqlConfig = await app.configCenter.fetch('mysql')
    app.database = app.mysql.createInstance(mysqlConfig)
  })


  const { router, controller } = app;
  router.get('/', controller.home.index);
};
