// 对axios进行封装
import axios from 'axios'
export function request(config){
    // 创建axios实例
    const instance = axios.create({
        baseURL:'http://47.98.251.40:8092',
        timeout:5000
    })

    // 发送请求，并将其返回
    return instance(config)
}