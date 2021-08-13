import request from '@/utils/request'

const api_name = '/admin/product/baseCategoryTrademark'

export default {

  findTrademarkList(category3Id) {
    return request({
      url: `${api_name}/${category3Id}`,
      method: 'get'
    })
  },

  save(role) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: role
    })
  },

  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  }
}
