import React from 'react'
import Header from './components/Header'

function Home(props) {
  // console.log(props);
  return (
    <div className="Home">
      <Header loginStatus ={props.loginStatus}></Header>
    </div>
  )
}

export default Home