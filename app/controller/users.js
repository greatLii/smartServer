const Controller = require('egg').Controller;

class UserController extends Controller {
    /**
     * 调用service层
     * 得到所有数据 
     */
    async index () {
        const {ctx,service} = this
        const users = await service.users.index()
        ctx.body = users
    }
}

module.exports = UserController

// exports.index = async () =>{
//         const ctx = this.ctx
//         console.log('ctx',ctx.service.users)
//         const users = await this.service.users.index()
//         ctx.body = users 
// }