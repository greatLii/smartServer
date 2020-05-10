/*
 * @Author: greatLii
 * @Date: 2020-05-10 20:41:16
 * @LastEditors: greatLii
 * @LastEditTime: 2020-05-10 23:04:15
 * @Description : 共有服务
 */
const Controller = require('egg').Controller;
const Client = require('../utils/messageUtils')
/**
 * @Controller
 */
class ServersController extends Controller {

  /**
  * @description 通过电话号码获取验证码
  * @router post /api/v1/common/message/:phone
  * @request path string {phone}
  */
async messageinfo() {
  const { ctx } = this;
  console.log(JSON.stringify(ctx.params.phone))
   let params = {
    "RegionId": "cn-hangzhou",
    "PhoneNumbers": ctx.params.phone,
    "SignName": "smartAnts",
    "TemplateCode": "SMS_189762728",
    "TemplateParam": "{\"code\":\"123456\"}"
  }
  console.log('params', params)
  let requestOption = {
    method: 'POST'
  };
    Client.request('SendSms', params, requestOption).then((result) => {
    console.log('result', JSON.stringify(result));
  }, (ex) => {
    console.log(ex);
  })
  
}
}
module.exports = ServersController;
