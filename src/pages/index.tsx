import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Sort from '../components/Sort'
import TeaItem from '../components/TeaItem'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { fetchTea } from '../redux/reducers/fetchTea'

const Home: NextPage = () => {

  const dispatch = useAppDispatch()
  const {items, status} = useAppSelector(state => state.tea)
  const {activeCategory, activeSearch, activeSort: {order, sortBy}} = useAppSelector(state => state.filter)

  useEffect(() => {
    dispatch(fetchTea({
      category: activeCategory,
      search: activeSearch,
      order,
      sortBy,
    }))
  }, [activeCategory, activeSearch, order, sortBy])

  return (
    <div className='mycontainer py-[43px]'>
      <div className='flex gap-[100px]'>
        <Categories />

        <div className='flex-1'>
          <div className='flex justify-between'>
            <div className='font-bold text-4xl'>Каталог чая</div>
            <Sort />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
            {status === 'error' && <h2>Error</h2>}
            {status === 'loading' && <h2>Loading</h2>}
            {status === 'success' && items.map(item => <TeaItem key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
