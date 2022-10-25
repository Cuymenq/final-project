import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import Banner from '../components/Banner'
import gif1 from '../assets/pikachu.gif'
 
export default function Home() {
    const { user } = useContext(AuthContext)
    const { login, logout } = useContext(AuthContext)

    return (
        <div className='container text-center mx-2'>

            {
                (user.loggedIn) ?
                    (
                        <>
                            <h2 className='text-light'>Welcome, {user.username}</h2>
                            <Banner />
                        </>
                    )
                    :
                    <div className='container my-2 text-light'>
                        <h1>Welcome to my Project</h1>
                        <h2>Please login to continue</h2>
                        <div className='my-3'>
                        <button onClick={login} className="btn btn-primary">
                            Login
                        </button>

                        </div>
                        <div>
                        <img src={gif1} />
                        </div>
                    </div>

            }
        </div>
    )
}