const ItemRating = ({ product } ) => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-star"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#fbbf24"
        fill="#fbbf24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
      </svg>
      <div className="flex flex-row gap-1">
        <span className="text-gray-500 text-sm">{product.name}</span>
      </div>
    </div>
  )
}

export default ItemRating