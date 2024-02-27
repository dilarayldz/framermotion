import {motion} from 'framer-motion';

const Box1 = () => {
    return (
        <div className='box-container'>
            <motion.div className='box'
            animate={{
                x: 100,
                opacity: 1,
                scale: 1,
                rotate: 270,
                backgroundColor: 'blue'
            }}
            initital= {{
                y: 0,
                opacity: 0,
                backgroundColor: 'red'
            }}
            transition={{
                duration: 5
            }}

            >
                
            </motion.div>
        </div>
    )
}

export default Box1