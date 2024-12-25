import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/Food_display/FoodDisplay'
import Appdownload from '../../components/Appdownload/Appdownload'

const Home = () => {
  const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home