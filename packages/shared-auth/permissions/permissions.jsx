import { ROLES }
from '../constants/roles'

export const permissions = {
  [ROLES.ADMIN]: [
    'product:create',
    'product:update',
    'product:delete',
    'orders:manage'
  ],

  [ROLES.MANAGER]: [
    'product:update',
    'orders:manage'
  ],

  [ROLES.CUSTOMER]: [
    'cart:add',
    'order:create'
  ]
}