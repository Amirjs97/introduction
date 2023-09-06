import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Edu = () => {

    const [openA, setopenA] = useState(false);
    const [openB, setopenB] = useState(false);
    const [openC, setopenC] = useState(false);

    const bgvariant = {
        changer: {
            backgroundColor: ["#DFCCFB", "#D0BFFF", "#BEADFA", "#D8B4F8"],
            transition: {
                duration: 6,
                type: "tween",
                delay: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                staggerChildren: "beforeChildren",
            }
        },
        intro: {
            scale: [0.5, 1],
            transition: {
                delay: 0.1,
                duration: 1,
            }
        },
        rotatordown: {
            rotate: [-180, 360],
            transition: {
                delay: 0.2,
                duration: 2,
                type: "spring",
            }
        },
        rotatorup: {
            rotate: [-180, 360],
            transition: {
                delay: 0.2,
                duration: 2,
                type: "spring",
            }
        },
        icontranslocate: {
            x: [-400, 0],
            transition: {
                delay: 0.2,
                duration: 2,
                type: "spring",
            }
        },
        icontranslocates: {
            x: [-60, 0],
            transition: {
                delay: 0.2,
                duration: 2,
                type: "spring",
            }
        }
    };

    return (

        <>
            <AnimatePresence mode="wait">
                <motion.div variants={bgvariant} animate="changer" className="flex flex-col w-[90%] my-20 mx-8 min-h-[10rem] justify-center items-center gap-4 p-2 rounded-lg ">

                    <motion.div variants={bgvariant} animate="intro" drag dragConstraints={{
                        left: 0, right: 0, top: 0, bottom: 0,
                    }} className="w-full h-fit p-4 m-2 flex flex-col justify-center items-center gap-8">
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <motion.i variants={bgvariant} animate="icontranslocate" className="fa-solid fa-building-columns fa-2xl"></motion.i>
                            <h2 className="text-lg text-black">دیپلم : مدرسه علامه حلی</h2>
                        </div>
                        <button onClick={() => {
                            setopenA(!openA);
                        }} className="w-fit h-fit rounded-full">
                            {!openA ?
                                <motion.i variants={bgvariant} animate="rotatorup" className="fa-solid fa-circle-down fa-2xl"></motion.i>
                                : <motion.i variants={bgvariant} animate="rotatordown" className="fa-solid fa-circle-up fa-2xl"></motion.i>}
                        </button>
                    </motion.div>

                    {openA && (
                        <motion.div variants={bgvariant} animate="intro" drag dragConstraints={{
                            left: 0, right: 0, top: 0, bottom: 0,
                        }}
                            className="w-full h-fit p-4 m-2 flex flex-col justify-center items-center gap-8">
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <i className="fa-solid fa-building-columns fa-2xl"></i>
                                <h2 className="text-lg text-black">کارشناسی : علوم آزمایشگاهی دانشگاه علوم پزشکی قزوین</h2>
                            </div>
                            <button onClick={() => {
                                setopenB(!openB);
                            }} className="w-fit h-fit rounded-full">{!openB ?
                                <motion.i variants={bgvariant} animate="rotatorup" className="fa-solid fa-circle-down fa-2xl"></motion.i>
                                : <motion.i variants={bgvariant} animate="rotatordown" className="fa-solid fa-circle-up fa-2xl"></motion.i>}</button>
                        </motion.div>
                    )}
                    {openB && (
                        <motion.div variants={bgvariant} animate="intro" drag dragConstraints={{
                            left: 0, right: 0, top: 0, bottom: 0,
                        }}
                            className="w-full h-fit p-4 m-2 flex flex-col justify-center items-center gap-8">
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <i className="fa-solid fa-building-columns fa-2xl"></i>
                                <h2 className="text-lg text-black">کارشناسی ارشد : بیوشیمی بالینی دانشگاه علوم پزشکی کاشان</h2>
                            </div>
                            <button onClick={() => {
                                setopenC(!openC);
                            }} className="w-fit h-fit rounded-full">{!openC ?
                                <motion.i variants={bgvariant} animate="rotatorup" className="fa-solid fa-circle-down fa-2xl"></motion.i>
                                : <motion.i variants={bgvariant} animate="rotatordown" className="fa-solid fa-circle-up fa-2xl"></motion.i>}</button>
                        </motion.div>
                    )}
                    {openC && (
                        <motion.div variants={bgvariant} animate="intro" drag dragConstraints={{
                            left: 0, right: 0, top: 0, bottom: 0,
                        }}
                            className="w-full h-fit p-4 m-2 flex flex-col justify-center items-center gap-8">
                            <div className="flex flex-row gap-4 justify-center items-center">
                                <i className="fa-solid fa-laptop-code fa-2xl fa-bounce"></i>
                                <motion.h2 variants={bgvariant} animate="icontranslocates" className="text-lg text-black">برنامه نویسی : موسسه سماتک + خودآموزی فراوااااان</motion.h2>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </>
    )
};
export default Edu;