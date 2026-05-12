import { useState } from 'react'
import { productApi } from '@srcart/shared-api/productApi'

const initialFormValues = {
  name: '',
  description: '',
  price: '',
  category: '',
  stock: '',
  imageUrl: '',
}

const categories = [        
  'Electronics',
  'Apparel',
  'Home',
  'Beauty',
  'Sports',
  'Books',
]

const validateProduct = (values) => {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Product name is required.'
  } else if (values.name.trim().length < 3) {
    errors.name = 'Product name must be at least 3 characters.'
  }

  if (!values.description.trim()) {
    errors.description = 'Description is required.'
  } else if (values.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters.'
  }

  if (!values.price) {
    errors.price = 'Price is required.'
  } else if (Number.isNaN(Number(values.price))) {
    errors.price = 'Price must be a number.'
  } else if (Number(values.price) <= 0) {
    errors.price = 'Price must be greater than zero.'
  }

  if (!values.category) {
    errors.category = 'Category is required.'
  }

  if (!values.stock) {
    errors.stock = 'Stock quantity is required.'
  } else if (!Number.isInteger(Number(values.stock))) {
    errors.stock = 'Stock must be a whole number.'
  } else if (Number(values.stock) < 0) {
    errors.stock = 'Stock cannot be negative.'
  }

  if (!values.imageUrl.trim()) {
    errors.imageUrl = 'Image URL is required.'
  } else if (!/^https?:\/\//i.test(values.imageUrl.trim())) {
    errors.imageUrl = 'Image URL must start with http:// or https://.'
  }

  return errors
}

const inputClasses =
  'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100'

const ProductForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({})
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }))
    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }))
    setSubmitMessage('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validateProduct(formValues)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setSubmitMessage('Product values are valid. Ready to submit to the API.')

      await productApi.createProduct(form)

      console.log('Product payload', {
        ...formValues,
        price: Number(formValues.price),
        stock: Number(formValues.stock),
      })
      return
    }

    setSubmitMessage('Please fix the errors above and resubmit the form.')
  }

  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
      <h1 className="text-3xl font-semibold text-slate-900">Product Form</h1>
      <p className="mt-2 text-sm text-slate-600">   
        Add or update product details, then submit when the form is valid.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
        {submitMessage && (
          <div
            className={`rounded-2xl px-4 py-3 text-sm ${
              Object.keys(errors).length === 0
                ? 'bg-emerald-50 text-emerald-800'
                : 'bg-amber-50 text-amber-800'
            }`}
          >
            {submitMessage}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Product name
            <input
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Enter product name"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Category
            <select
              name="category"
              value={formValues.category}
              onChange={handleChange}
              className={inputClasses}
              aria-invalid={Boolean(errors.category)}
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-xs text-rose-600">{errors.category}</p>
            )}
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Price ($)
            <input
              type="number"
              name="price"
              step="0.01"
              value={formValues.price}
              onChange={handleChange}
              className={inputClasses}
              placeholder="0.00"
              aria-invalid={Boolean(errors.price)}
            />
            {errors.price && <p className="mt-1 text-xs text-rose-600">{errors.price}</p>}
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Stock quantity
            <input
              type="number"
              name="stock"
              step="1"
              value={formValues.stock}
              onChange={handleChange}
              className={inputClasses}
              placeholder="0"
              aria-invalid={Boolean(errors.stock)}
            />
            {errors.stock && <p className="mt-1 text-xs text-rose-600">{errors.stock}</p>}
          </label>
        </div>

        <label className="block text-sm font-medium text-slate-700">
          Image URL
          <input
            name="imageUrl"
            value={formValues.imageUrl}
            onChange={handleChange}
            className={inputClasses}
            placeholder="https://example.com/product.jpg"
            aria-invalid={Boolean(errors.imageUrl)}
          />
          {errors.imageUrl && <p className="mt-1 text-xs text-rose-600">{errors.imageUrl}</p>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Description
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
            rows="5"
            className={`${inputClasses} min-h-[150px] resize-none`}
            placeholder="Write a short product description"
            aria-invalid={Boolean(errors.description)}
          />
          {errors.description && (
            <p className="mt-1 text-xs text-rose-600">{errors.description}</p>
          )}
        </label>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Validate product
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm