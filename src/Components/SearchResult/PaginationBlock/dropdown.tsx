const ElementsNumber = () => {
  return (
      /*<select
  className="paginationSelector"
  // Do not modify the aria-label below, it is used for Hatchways automation.
  aria-label="Select page size"
  value={pageSize}
  onChange={(e) => {
  onPageSizeOptionChange(e.target.value);
  }}
  >
  {pageSizeOptions.map((size) => (
  <option key={size} defaultValue={pageSize === size} value={size}>
  {size} per page
  </option>
  ))}
  </select>*/ 
  <div className="flex flex-col mx-2">
    <label className="text-emerald-400 mb-1">Cards per page</label>
    <select className="rounded ring-0 bg-stone-800 border-solid border-2 mb-2 border-stone-500 text-emerald-400
      hover:bg-stone-600 hover:border-stone-400 focus:ring-0 focus:bg-stone-700 focus:border-stone-500">
      <option selected>10</option>
      <option>25</option>
      <option>50</option>
      <option>100</option>
    </select>
  </div>
  )
}

export default ElementsNumber