import React from 'react'
import {motion} from 'framer-motion';

const Box4 = () => {
    return (
        <div className='box-container'>
            <motion.div className='box'
            
            animate = {{
                scale: [1, 1.2, 1.6, 2, 1],
                borderRadius: ['20%', '20%', '60%', '80%', '100%'],
                rotate: [0, 0, 270, 90, 0]
            }}

            transition={{
                duration: 2
            }}
            >

            </motion.div>
        </div>
    )
}

export default Box4