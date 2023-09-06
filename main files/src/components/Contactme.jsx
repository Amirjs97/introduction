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
                <div className="flex flex-col w-[50rem] my-20 mx-8 min-h-[10rem] justify-center items-center gap-4 p-2 rounded-lg" >
                    <div className="w-fit h-full gap-4 m-3 bg-blue-200 p-4 rounded-lg border-2 border-blue-800 shadow-xl shadow-blue-900">
                        <motion.div variants={info} animate="hover" className="flex flex-row justify-start items-center gap-3 p-4 m-2" dir="ltr">
                            <i className="fa-solid fa-at fa-2xl text-slate-700 animate-pulse"></i>
                            <h2 className="text-red-900 font-bold text-xl">Gmail : Amirhosseinjoorisohrabi@gmail.com</h2>
                        </motion.div>
                        <hr className="border-black border-2" />
                        <motion.div variants={info} animate="hover" className="flex flex-row justify-start items-center gap-3 p-4 m-2" dir="ltr">
                            <i className="fa-solid fa-mobile fa-2xl text-slate-700 animate-pulse"></i>
                            <h2 className="text-red-900 font-bold text-xl">Phone : +989128355518</h2>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </>
    )
}
export default Contactme;