import React, { useEffect, useState } from 'react'
import { getAllDishes } from '../services/dish';

export const GetAllDishesHooks = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(()=>{
        const fetchDishes = async () => {
            try {
                const result = await getAllDishes();
                if(result.status === 200){
                    setDishes(result.data.dishes);
                }
            } catch (error) {
                console.error("Error fetching dishes:", error);
            }
        }
        fetchDishes();
    },[])
  return  {
      dishes,
      setDishes
  }
}
