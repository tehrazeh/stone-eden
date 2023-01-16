
const OptionalFilter = () => {

  // change filter values of number | null to ceparate object to retrieve its properties as object.keys and map them
  // but for now lets do it like this
  const optionalFilter = ['attack', 'health', 'cost', 'durability']

  const inputStyle = `bg-stone-900 rounded border-2 text-emerald-200 placeholder-emerald-100
  placeholder-opacity-50 p-1 border-solid border-emerald-700 m-4 focus:border-emerald-600
  focus:bg-stone-800 focus:outline-none focus:text-emerald-200`

  const filterInputs = optionalFilter.map(item => {
    return <input type='text' placeholder={`Enter ${item}...`}   
    className={inputStyle}
    />
  })

  return (
    <>
    {filterInputs}
    </>
  )
}

export default OptionalFilter