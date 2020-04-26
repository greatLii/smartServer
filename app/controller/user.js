import { Controller } from "egg";

class UserController extends Controller {
    async info () {
        const ctx = this
        // 得到参数
        const rule = {
            id: {type:'number'}
        }
        this.validate(rule)
        
    }
}