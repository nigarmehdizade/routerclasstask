import React from 'react'
import { Link, useNavigate } from 'react-router'

const Home = () => {
    const navigation = useNavigate
  return (
    <div>
        <button onClick={()=> navigation('/team')} >GO TO TEAM PAGE</button>
        <Link to="/team">Team sehifesine kec</Link>
    </div>
  )
}

export default Home