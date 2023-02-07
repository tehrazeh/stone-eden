import { Route, Routes } from 'react-router-dom'
import Search from '../Pages/Search'

const AppRouter = () => {
  return (
    <div className='flex flex-grow flex-col bg-stone-500'>
    <Routes>
      <Route path='/' element={
              <div className='h-full bg-amber-900'>
              main section my friend
            </div>
      } />
      <Route path='/search/:type' element={<Search />} />
      <Route path='/filter' element={<div>bro its a test bro</div>}/>
    </Routes>
  </div>
  )
}

export default AppRouter