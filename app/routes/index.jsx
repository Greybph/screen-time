import HeroDark from '../components/HeroDark'
import {UserContext} from '../root'
import {useContext} from 'react'

  function Index() {
    const userContext = useContext(UserContext)
    return (    
        <div className="flex flex-col items-center justify-center mt-96">
          <p>Hello</p>
          {userContext ? <p>{userContext?.username}</p> : <p>Not logged</p>}
          <HeroDark />
        </div>
    )
  }
  
  export default Index
  

