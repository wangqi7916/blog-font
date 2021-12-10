/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import axios from '@/utils/index'

// eslint-disable-next-line import/prefer-default-export
export function getList(params: any) {
  return axios({
    url: '/article/list',
    method: 'get',
    params
  })
}
