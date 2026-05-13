import { usePermission } from "@srcart/shared-auth";
const Product = () => {
  const canCreateProduct = usePermission('product:create')
  return (
    <>
    <h1>Create product</h1>
    {canCreateProduct && (
    <button className="btn inline-flex items-center gap-x-1 bg-green-600 text-white border-green-600 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-green-700 active:border-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 btn-sm">
      Add Product
    </button>
    )}
    </>
  )
}

export default Product