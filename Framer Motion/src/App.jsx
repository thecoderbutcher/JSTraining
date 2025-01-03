import {motion} from 'framer-motion'
function App() {  
  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center content-center'>
        <motion.h1
          initial={{y:-100, x:-100, scale:0.5}}
          animate={{y:0, x:0}}
          whileInView={{scale:1.5}}
          transition={{duration:.5}}
          className='text-violet-400'
        >
          Hello Frame
        </motion.h1>
      </div>
      <section className='flex h-screen justify-center '>
        <motion.h1 
          whileTap={{ scale: 1.1 }}
          className='text-orange-500'
        >GILASZO
        </motion.h1>
        <motion.h1
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          drag='x'
          dragConstraints={{left:0, right:0}}
        >
          Hola
        </motion.h1>
      </section>
    </>
  )
}

export default App
