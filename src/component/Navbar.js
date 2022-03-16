import React , {useState} from 'react'
import { motion } from "framer-motion";

import DisplayTodo from './DisplayTodo'

const Navbar = ({addTodo  , updateTodo , setaddTodo}) => {

  const [sort , setsort] = useState("active");


  const completed = (id) => {
    setaddTodo(addTodo.map((curElem) => {
      if(curElem.id == id)
      {
        return {...curElem , completed : true };
      }
      return curElem;
    }
    ))
  }

  const remove = (id) => {
    const remainItems = addTodo.filter((curElem) => {
      return curElem.id != id;
    });
    setaddTodo(remainItems);
  }

  return (
    <div>
        <div className='navbar'>
          <motion.button whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} onClick={() => {setsort("active")}}>Active</motion.button>
          <motion.button whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} onClick={() => {setsort("completed")}}>Completed</motion.button>
          <motion.button whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} onClick={() => {setsort("all")}}>All</motion.button>
        </div>
        <div className='display'>

            {( addTodo.length > 0 && sort === "active") ?
                addTodo.map((curElem) => {
                  return(
                    curElem.completed === false && (
                    <DisplayTodo curElem={curElem} updateTodo = {updateTodo} completed={completed} remove = {remove} key = {curElem.id}/>
                    )
                  )
                }) : null
            }


            {( addTodo.length > 0 && sort === "completed") ?
                addTodo.map((curElem) => {
                  return(
                    curElem.completed === true && (
                    <DisplayTodo curElem={curElem} updateTodo = {updateTodo} completed={completed} remove = {remove} key = {curElem.id}/>
                    )
                  )
                }) : null
            }


           {( addTodo.length > 0 && sort === "all") ?
                addTodo.map((curElem) => {
                  return(
                    <DisplayTodo curElem={curElem} updateTodo = {updateTodo} completed={completed} remove = {remove} key = {curElem.id}/>
                    )
                }) : null
            }

        </div>
    </div>
  )
}

export default Navbar