import {ReactNode} from 'react'
import Header from '../components/Header'

interface MainLayOutProps {
    children: ReactNode
}

const MainLayOut = ({children}: MainLayOutProps) => {
    return (
        <div className='bg-white rounded-lg h-full mt-[50px] mx-auto max-w-[1400px] w-11/12'>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayOut