import { motion, AnimatePresence } from "framer-motion";

const Contactme = () => {
    const info = {
        hover: {
            x: [0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0],
            transition: {
                duration: 1.5,
                delay: 0.1,
                ease: "easeInOut",
                repeat :"reverse"
            }
        }
    }
    return (
        <>
            <AnimatePresence>
                <div className="flex flex-col w-[90%] my-20 mx-8 min-h-[10rem] justify-center items-center gap-4 p-2 rounded-lg" >
                    <div className="w-fit h-full gap-4 sm:m-3 m-1 bg-blue-200 sm:p-4 p-2 rounded-lg border-2 border-blue-800 shadow-xl shadow-blue-900">
                        <motion.div variants={info} animate="hover" className="flex flex-row justify-start items-center gap-3 p-4 m-2" dir="ltr">
                            <i className="fa-solid fa-at sm:fa-2xl fa-xl text-slate-700 animate-pulse"></i>
                            <h2 className="text-red-900 font-bold sm:text-xl text-base">Gmail : Amirhosseinjoorisohrabi@gmail.com</h2>
                        </motion.div>
                        <hr className="border-black border-2" />
                        <motion.div variants={info} animate="hover" className="flex flex-row justify-start items-center gap-3 p-4 m-2" dir="ltr">
                            <i className="fa-solid fa-mobile sm:fa-2xl fa-xl text-slate-700 animate-pulse"></i>
                            <h2 className="text-red-900 font-bold sm:text-xl text-base">Phone : +989128355518</h2>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </>
    )
}
export default Contactme;