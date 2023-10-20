import React from 'react';
import { motion } from 'framer-motion'


const Head = () => {
   
    return ( 
        <motion.section 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: .4, duration: .9}}
        className="mt-24">
            <div className="hero__container">
                <motion.div
                initial={{opacity: 0, x: -200}}
                whileInView={{opacity: 1, x: 0}}
                transition={{delay: .4, duration: 1.2}}
                className="">
                      <h1 className="lg:mt-4 text-blue-700 text-center font-bold lg:text-8xl sm:text-4xl sm:mt-4" >RAHMAN'S STORE</h1>
                   
                   
                </motion.div>
                <motion.div
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: .4, duration: 1.2}}>
                    <h3 className="lg:mt-4 text-blue-400 text-center italic lg:text-4xl sm:text-2xl sm:mt-4">The best store to get the best deals</h3>
                   
                </motion.div><br/>
            </div>
          
        </motion.section>
     );
}
 
export default Head;