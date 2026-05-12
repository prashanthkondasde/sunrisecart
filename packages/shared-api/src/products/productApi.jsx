import {
  apiClient
} from '../apiClient'

export const productApi = {
  getProducts: async () => {
    const response =
      await apiClient.get(
        '/products'
      )

    return response.data
  },

  getProductById:
    async id => {
      const response =
        await apiClient.get(
          `/products/${id}`
        )

      return response.data
    }
}