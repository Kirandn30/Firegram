import React from "react";
import {motion} from 'framer-motion/dist/framer-motion'

const Modal = ({selectedImage, setSelectedImage}) =>{

const handelchange =(event)=>{
    if(event.target.classList.contains("backdrop")){
        setSelectedImage(null)
    }
}
    return(
        <motion.div className="backdrop" onClick={handelchange}
        initial={{opacity:0}}
        animate={{opacity:1}}>
          <motion.img src={selectedImage} alt="enlarged img"
              initial={{y:"-100vh"}}
              animate={{y:0}}
          />
        </motion.div>
   
    );
}

export default Modal;