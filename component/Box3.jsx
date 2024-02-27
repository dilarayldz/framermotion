import {motion} from 'framer-motion';

const Box3 = () => {
    return (
        <div className='box-container'>
            <motion.div className='box'
            
            whileHover={{
                scale: 1.2
            }
            }

            drag

            dragConstraints = {{
                right: 20,
                left: -10,
                top: 40,
                buttom: 10
            }}

            whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: '100%'
            }}

            >
            </motion.div>
        </div>
    )
}

export default Box3