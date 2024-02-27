import React from 'react'
import {motion} from 'framer-motion';
 
const Box5 = () => {

    const boxVariant = {
        hidden: {
            x: 100,
            scale: 1.5
        },

        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2,
                duration: 2
            }
        }
    }

    const liVariant = {
        hidden: {
            y: 20,
            opacity: 0
        },

        visible: {
            y: 0,
            opacity: 1
        }
    }

    return(
        <div className='box-container'>
            <motion.div className='box'
            variants={boxVariant}
            animatee='visible'
            initial='hidden'
            >
                {[1, 2, 3].map( box => {
                    return(
                        <motion.li className='boxItem'
                        variants={liVariant}
                        animate='visible'
                        initial='hidden'
                        >
                        </motion.li>

                    )
                })}
            </motion.div>
        </div>
    )
}

export default Box5