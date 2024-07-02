import { FiLogIn} from 'react-icons/fi'
import {CiLogout } from 'react-icons/ci'
import { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'

const RegButton = () => {

    const {loginWithRedirect, logout, isAuthenticated} = useContext(GlobalContext)

    return (
        <>
        <div className=' flex justify-end items-center space-x-2 p-4'>

        
        <div>{isAuthenticated? <CiLogout/> : <FiLogIn/>}</div>
        <div>{isAuthenticated? (<button onClick={()=>logout({logoutParams:{returnTo:window.location.origin}})} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>Logout</button>):(<button onClick={()=> loginWithRedirect()} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Login</button>)}</div>
        </div>
        </>
    )

}


export default RegButton