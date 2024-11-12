import { motion,AnimatePresence } from 'framer-motion'


const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
        {
            open &&(
                <motion.div
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y:0}}
                    exit={{opacity: 0,y: -100}}
                    transition={{duration: 0.3}}
                    className="absolute top-20 left-0 w-full h-screen z-20"
                >
                    <div className='text-xl font-serif uppercase bg-primary text-white py-10 m-6 '>
                        <ul className='flex flex-col justify-center items-center gap-10'>
                            <li>HOME</li>
                            <li>BOOK</li>
                            <li>AUTHORS</li>
                            <li>CONTACTS</li>
                        </ul>
                    </div>
                    
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu
