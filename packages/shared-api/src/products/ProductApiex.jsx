import { apiClient } from './apiClient'

export const productApiex = {
  getProducts() {
    return apiClient.get('/products')
  },

  getProduct(id) {
    return apiClient.get(`/products/${id}`)
  },

  createProduct(payload) {
    return apiClient.post('/products', payload)
  },

  updateProduct(id, payload) {
    return apiClient.put(`/products/${id}`, payload)
  },

  deleteProduct(id) {
    return apiClient.delete(`/products/${id}`)
  }
}