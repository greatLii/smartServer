/*
 * @Author: greatLii
 * @Date: 2020-04-25 21:05:32
 * @LastEditors: greatLii
 * @LastEditTime: 2020-05-10 20:39:30
 * @Description : user的controller
 */
const Controller = require('egg').Controller;
/**
 * @Controller
 */
class UserController extends Controller {
  /**
  * @description 根据Id获取信息
  * @router get /api/v1/users
  */
  async index() {
    const { ctx, service } = this;
    const users = await service.users.index();
    ctx.body = users;
  }
}

module.exports = UserController;
