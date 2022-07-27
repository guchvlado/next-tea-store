import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../components/Header'
import Sort from '../components/Sort'
import TeaItem from '../components/TeaItem'

const Home: NextPage = () => {
  return (
    <div className='p-10'>
        <div className='flex justify-between'>
          <div className='font-bold text-4xl'>Каталог чая</div>
          <Sort/>
        </div>
        <TeaItem id='1' price={100} title='some tea' category='green' rating={10} key='1' imageUrl='https://moychay.ru/system/product_ng_fotos/8567/medium/d43f93403e20616dd1844d189670e2cc4713a568/moychay_42294.jpg?1637249762' />
    </div>
  )
}

export default Home
