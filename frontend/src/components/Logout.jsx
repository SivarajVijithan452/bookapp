import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogut = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem('user')
            toast.success("Logout Successfully");
            window.location.reload();
        } catch (error) {
            toast.error(error)
        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer'
        onClick={handleLogut}>
            Logout
        </button>
    </div>
  )
}

export default Logout