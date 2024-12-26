import './FoodDisplay.css'
import React, { useContext } from 'react'
import { food_list } from './../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodDisplay = ({category}) => {
  const{food_list}=useContext(StoreContext)


  return (
    <div className='food-display' id='food-display'>
      <h1> Top dishes near you </h1>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          return
          
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
