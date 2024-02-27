import React, {useState} from 'react'
import {motion} from 'framer-motion';

const Box2 = () => {

    const {isAnimating, setIsAnimating} = useState(false);

    return (
        <motion.div className='box-container'>
            <motion.div 
            className='box'
            animate = {{
            x: isAnimating ? 100 : 0,
            opacity: isAnimating ? 1 : 0.8,
            scale: isAnimating ? 2 : 1,
            rotate: isAnimating ? 270 : 0,
            backgroundColor: 'blue'}}
            initial = {{
                y: 0,
                opacity: 0,
                backgroundColor: 'red'
            }}
            transition = {{
                duration: 5
            }}
            onClick={() => setIsAnimating(!isAnimating)}
        >
        </motion.div>
        </motion.div>
    )
}

export default Box2