import React from 'react'

import {useSelector, useStore} from "react-redux";

function Home() {
  const {user} = useSelector(state => ({...state}))

  return (
    <div className='container-fluid p-5 h1 text-center'>
      Home
      {JSON.stringify(user)}
    </div>
  )
}

export default Home