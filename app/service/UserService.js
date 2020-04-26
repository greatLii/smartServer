const Service = require('egg').Service

class UserService extends Service {
    async find(uid) {
        // egg.js 封装的方法 相当于 select * from 'user' where id = 11 limt 0,1
        const user = await this.app.mysql.get('users',{id:'11'})
        return {user}
    }
}