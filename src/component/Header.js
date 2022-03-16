import React , {useState} from 'react'
import { motion } from "framer-motion";

import { GoPlus } from "react-icons/go";

const Header = ( { addItem , inputtodo , setInputtodo } ) => {
  
  return (
    <div className='header'>
        <h1 className='headerTitle'>YOUR EVERYDAY TODOS</h1>
        <div className='headerInpBtn'>
            <input className='headerAdd' type="text" value={inputtodo} onChange={(e) => {setInputtodo(e.target.value)}} placeholder="✍ Add new TODO"/>
            <motion.button 
              whileHover = {{ scale: 1.1 }}
              whileTap = {{ scale: 0.9 }} 
              className='headerAddBtn' onClick={() => { addItem() } }>
              <GoPlus/>
            </motion.button>
        </div>
    </div>
  )
}

export default Header