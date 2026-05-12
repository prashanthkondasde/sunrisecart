import {
  useQuery
} from '@tanstack/react-query'

import {
  productApi
} from './productApi'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],

    queryFn:
      productApi.getProducts
  })
}