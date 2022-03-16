import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";

const DisplayTodo = ({curElem , updateTodo , completed , remove }) => {

  const inref =  useRef(true);

  const changeFocus = () => {
    // console.log(inref.current);
    inref.current.disabled = false;
    inref.current.focus();
  }

  return ( 
          <motion.div
            initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
            animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
            whileHover={{
            scale: 0.9,
            transition: { type: "spring", duration: 0.1 },
            }}
            exit={{
            x: "-60vw",
            scale: [1, 0],
            transition: { duration: 0.5 },
            backgroundColor: "rgba(255,0,0,1)",
            }}
            className='todoList'>
              <textarea defaultValue={curElem.data} ref={inref} disabled={inref} cols="30" onKeyPress={(e) => {updateTodo(curElem.id , inref.current.value , e , inref)}}></textarea>
              <div className='todoBtn'>
                {curElem.completed == false && <button ><AiFillEdit onClick={() => {changeFocus()}}/></button>}
                {curElem.completed == false && <button style={{ color: "green" }}><IoCheckmarkDoneSharp onClick={() => {completed(curElem.id)}}/></button>}
                <button style={{ color: "red" }}><IoClose onClick={() => {remove(curElem.id)}} /></button>
              </div>
          </motion.div>
        )
}

export default DisplayTodo