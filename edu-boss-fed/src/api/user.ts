import request from '@/utils/request'
import qs from 'qs'

interface User {
  phone: string;
  password: string;
}

export const login = (data: User) => {
  return request({
    method: 'post',
    url: '/front/user/login',
    data: qs.stringify(data)
  })
}

export const getUserInfo = () => {
  return request({
    method: 'get',
    url: '/front/user/getInfo'
  })
}
