import { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { myparticles } from "%PUBLIC_URL%/./particles";
import CountUp from 'react-countup';
import { motion, AnimatePresence } from "framer-motion"
// import { InView, useInView } from 'react-intersection-observer';

function Intro() {
    const [goals, setgoals] = useState(false);
    const tolearn = [{ name: "Git & Github", id: 1, icon: <i className="fa-brands fa-git-alt fa-2xl text-slate-700"></i> }, { name: "VueJs", id: 2, icon: <i className="fa-brands fa-vuejs fa-2xl text-slate-700"></i> }, { name: "NodeJS", id: 3, icon: <i className="fa-brands fa-node fa-2xl text-slate-700"></i> }, { name: "Python", id: 4, icon: <i className="fa-brands fa-python fa-2xl text-slate-700"></i> }, { name: "SQL", id: 5, icon: <i className="fa-solid fa-database fa-2xl text-slate-700"></i> }, { name: "Php & Laravel", id: 6, icon: <i className="fa-brands fa-php fa-2xl text-slate-700"></i> }, { name: "Figma", id: 7, icon: <i className="fa-brands fa-figma fa-2xl text-slate-700"></i> },{name:"NEXTJS",id:8, icon: <i className="fa-brands fa-react fa-2xl text-slate-700"></i>}];
    
    const learned = [{ name: "html & CSS", id: 1, icon: <i className="fa-brands fa-html5 fa-2xl text-slate-700"></i> }, { name: "Bootstrap5", id: 2, icon: <i className="fa-brands fa-bootstrap fa-2xl text-slate-700"></i> }, { name: "Javascript", id: 3, icon: <i className="fa-brands fa-js fa-2xl text-slate-700"></i> }, { name: "ReactJS", id: 4, icon: <i className="fa-brands fa-react fa-2xl text-slate-700"></i> }, { name: "AlpineJS", id: 5, icon: <i className="fa-brands fa-react fa-2xl text-slate-700"></i> }, { name: "TailwindCss", id: 6, icon: <i className="fa-brands fa-css3 fa-2xl text-slate-700"></i> }, { name: "Some React Libraries", id: 7, icon: <i className="fa-brands fa-react fa-2xl text-slate-700"></i> }, { name: "Basic Python", id: 8, icon: <i className="fa-brands fa-python fa-2xl text-slate-700"></i> }, { name: "Basic SQL", id: 9, icon: <i className="fa-solid fa-database fa-2xl text-slate-700"></i> }]
    const buttonvariant = {
        hover: {
            scale: [1, 1.1, 1],
            transition: {
                repeat:Infinity,
                repeatType: "reverse",
                duration: 0.5,
                delay: 0.1,
            }
        }
    };
    const info = {
        hover: {
            x: [0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0],
            transition: {
                duration: 1.5,
                delay: 0.1,
                ease: "easeInOut",
                repeat:Infinity,
                repeatType: "reverse",
            }
        },
        hover2: {
            y: [0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0],
            transition: {
                duration: 1.5,
                delay: 0.1,
                ease: "easeInOut",
                repeat:Infinity,
                repeatType: "reverse",
            }
        }
    }
    const slide = {
        slideout: {
            y: '100rem',
            transition: {
                delay: 0.1,
                duration: 0.6,
                type: "keyframes",
            },

        },
        slidein: {
            y: 0,
            transition: {
                delay: 0.1,
                duration: 0.6,
                type: "keyframes"
            },

        }
    };
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);


    return (
        <>
            <Particles id="tsparticles" options={myparticles} init={particlesInit} loaded={particlesLoaded} className="myparticles" />
            <motion.div className="flex flex-col justify-center items-center gap-4" initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 1.5, delay: 0.1, when: "beforeChildren" }}>
                <div className="lg:w-[90%] md:w-[85%] w-[90%] min-h-[10rem] relative m-3 bg-violet-50 dark:bg-slate-200 rounded-lg shadow-lg shadow-indigo-700 dark:shadow-slate-700 border-2 border-blue-900">
                    <div className="grid grid-cols-2 gr w-full h-full m-auto p-1 relative gap-1 ">
                        <div className="absolute -top-3 right-[40%] bg-yellow-100 rounded-lg p-2 border-2 border-yellow-400 shadow-md shadow-yellow-700 dark:bg-zinc-400 dark:text-white dark:border-black dark:shadow-black">برنامه نویس تازه کار</div>
                        <div className="w-auto h-full flex flex-col bg-teal-200 dark:bg-teal-800 p-3 gap-3 border-2 border-teal-800 rounded-md">
                            <h3 className="text-lg text-black dark:text-white">نام و نام خانوادگی : امیرحسین جوری سهرابی</h3>
                            <hr className="w-full border-b-2 border-black" />
                            <h3 className="text-lg text-black dark:text-white">ساکن / محل تولد : تهران</h3>
                            <hr className="w-full border-b-2 border-black" />
                            <h3 className="text-lg text-black dark:text-white">سطح تحصیلات : فوق لیسانس / کارشناسی ارشد</h3>
                            <hr className="w-full border-b-2 border-black" />
                            <h3 className="text-lg text-black dark:text-white">مدرک برنامه نویسی : مدرک بین المللی از موسسه سماتک</h3>
                        </div>
                        <div className="w-auto h-full flex flex-col justify-start items-center gap-2 dark:bg-blue-200 bg-green-200 border-2 border-green-800 rounded-md p-4">
                            <div className="bg-green-300 dark:bg-indigo-300 w-fit p-2 h-12 rounded-lg flex flex-row justify-center items-center gap-3">
                                <i className="fa-solid fa-mug-hot fa-2xl text-slate-700" ></i>
                                <CountUp
                                    className="w-fit h-fit p-1 text-center text-lg font-semibold"
                                    duration={10} start={0} end={12538} />
                            </div>
                            <div className="bg-green-300 dark:bg-indigo-300 w-fit p-2 h-12 rounded-lg flex flex-row justify-center items-center gap-3">
                                <i className="fa-solid fa-laptop-code fa-2xl text-slate-700"></i>
                                <CountUp
                                    className="w-fit h-fit p-1 text-center text-lg font-semibold"
                                    duration={10} start={0} end={251252} />
                            </div>
                            <div className="bg-green-300 dark:bg-indigo-300 w-fit p-2 h-12 rounded-lg flex flex-row justify-center items-center gap-3">
                                <i className="fa-solid fa-gamepad fa-2xl text-slate-700"></i>
                                <CountUp
                                    className="w-fit h-fit p-1 text-center text-lg font-semibold"
                                    duration={10} start={0} end={52312213} />
                            </div>
                        </div>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <div className="lg:w-[90%] md:w-[85%] w-[90%] min-h-[6rem] mb-[4rem] bg-violet-50 dark:bg-slate-200 rounded-lg shadow-lg
                        shadow-indigo-700 dark:shadow-slate-700 flex flex-col justify-start items-center gap-3">
                        <motion.button onClick={() => {
                            setgoals(!goals);
                        }} variants={buttonvariant} whileHover="hover" className="mt-5 font-bold text-lg bg-indigo-600 text-white w-40 h-10 shadow-xl rounded-md shadow-indigo-900">اهداف من</motion.button>
                        {goals ?
                            <div className="w-full h-full p-3 gap-3 flex flex-col justify-center items-center">
                                <div className="w-full h-full flex flex-col justify-center items-center">
                                    <h2 className="text-lg font-semibold dark:text-blue-950 text-indigo-900">مطالب در حال یادگیری و یا در انتظار برای یادگیری :</h2>

                                    <div className="grid grid-cols-2 gap-3 mx-auto my-4">
                                        {tolearn.map((tl) => {
                                            return (
                                                <motion.div className="flex flex-row justify-center items-center gap-2 p-2 m-2 bg-blue-100 rounded-md" key={tl.id} variants={slide} initial="slideout" animate="slidein" exit="slideout">
                                                    {tl.icon}
                                                    <motion.p variants={info} animate="hover" className="text-center text-lg dark:text-blue-950 text-blue-700 p-3" >{tl.name}</motion.p>
                                                </motion.div>
                                            )
                                        })}
                                    </div>

                                </div>
                                <div className="w-full h-full flex flex-col justify-center items-center">
                                    <h2 className="text-lg font-semibold dark:text-blue-950 text-indigo-900">مباحثی که با آنها آشناییت خوبی دارم :</h2>
                                    <div className="grid grid-cols-2 gap-3 mx-auto my-4">
                                        {learned.map((tl) => {
                                            return (
                                                <motion.div className="flex flex-row justify-center items-center gap-1 p-2 m-2 bg-blue-100 rounded-md" key={tl.id} variants={slide} initial="slideout" animate="slidein" exit="slideout">
                                                    {tl.icon}
                                                    <motion.p variants={info} animate="hover2" className="text-center text-lg dark:text-blue-950 text-blue-700 p-3" >{tl.name}</motion.p>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                </AnimatePresence>

            </motion.div>
        </>
    )
}


export default Intro;
