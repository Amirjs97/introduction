import { NavLink, Outlet } from "react-router-dom";
import { darkmodecontext } from "../contexts/darkmodecontext";
import { useContext, useEffect, useState } from "react";
import profilepic from "../assets/pics/profilepic.jpg";
import { RandomReveal } from 'react-random-reveal';
import { motion } from "framer-motion";
function Navbar() {
    const [open, setOpen] = useState(false);
    const { dark, setdark } = useContext(darkmodecontext);
    const navopen = () => {
        setOpen(!open);
        console.log("open", open);
    };
    useEffect(() => {
        dark ? document.getElementById('html').setAttribute("class", "dark") : document.getElementById("html").removeAttribute("class");
        console.log(dark);
    }, [dark]);
    const darklight = () => {
        // let sessionDarkmode=sessionStorage.getItem("darkMode");
        setdark(!dark);
    };

    return (
        <>
            <div className="flex md:flex-row flex-col bg-violet-100 dark:bg-slate-400 w-full min-h-screen z-10">
                {/* medium sidebar */}
                <motion.div initial={{ scale: 0.2 }} animate={{ scale: 1 }} transition={{ duration: 0.4, type: "tween" }} className="md:flex md:flex-col hidden lg:w-3/12 md:w-4/12 bg-indigo-300 dark:bg-slate-300 rounded p-2 shadow-xl dark:shadow-slate-800 shadow-violet-950">
                    <div className="flex flex-col items-center justify-center gap-3 p-2 mb-3 lg:relative">
                        {/* <button className="lg:absolute lg:top-7 lg:left-2 w-16 h-8 bg-slate-50 rounded-2xl flex items-center justify-center">
                            <i className="fa-solid fa-arrows-left-right fa-2xl" ></i>
                        </button> */}
                        <img className="h-36 w-40 rounded-full" src={profilepic} alt="AmirhosseinJooriSohrabi" />
                        <RandomReveal isPlaying revealEasing="linear" revealDuration={0.99} duration={7} characters="Amirhossein Joori Sohrabi" className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide"></RandomReveal>
                    </div>
                    <hr className="w-full border-blue-950 my-3" />
                    <ul className="flex flex-col mt-4 gap-3 text-base w-full h-fit">
                        <li className="block transition delay-100 rounded-md p-4 hover:bg-indigo-400 dark:hover:bg-slate-400 focus:shadow-outline w-full h-fit dark:border-slate-800 border-indigo-100 border-y-2">
                            <NavLink to={"/"} className="flex flex-row hover:-translate-x-3 transition-all items-center justify-start gap-8 text-gray-700 p-2 rounded-md font-medium w-full h-fit ">
                                <i className="fa-solid fa-users-between-lines fa-2xl" style={{ color: "black" }}></i>
                                <p className="font-bold text-indigo-950 ">صفحه اصلی</p>
                            </NavLink>
                        </li>
                        <li className="block transition delay-100 rounded-md p-4 hover:bg-indigo-400 dark:hover:bg-slate-400 focus:shadow-outline w-full h-fit dark:border-slate-800 border-indigo-100 border-y-2">
                            <NavLink to={"/intro"} className="flex flex-row hover:-translate-x-3 transition-all items-center justify-start gap-8 text-gray-700 p-2 rounded-md font-medium w-full h-fit ">
                                <i className="fa-solid fa-users-between-lines fa-2xl" style={{ color: "black" }}></i>
                                <p className="font-bold text-indigo-950 ">معرفی و اهداف</p>
                            </NavLink>
                        </li>
                        <li className="block transition delay-100 rounded-md p-4 hover:bg-indigo-400 dark:hover:bg-slate-400 focus:shadow-outline w-full h-fit dark:border-slate-800 border-indigo-100 border-y-2">
                            <NavLink to={"/education"} className="flex flex-row hover:-translate-x-3 transition-all items-center justify-start gap-8 text-gray-700 p-2 rounded-md font-medium w-full h-fit ">
                                <i className="fa-solid fa-user-graduate fa-2xl" style={{ color: "black" }}></i>
                                <p className="font-bold text-indigo-950 ">تحصیلات</p>
                            </NavLink>
                        </li>
                        <li className="block transition delay-100 rounded-md p-4 hover:bg-indigo-400 dark:hover:bg-slate-400 focus:shadow-outline w-full h-fit dark:border-slate-800 border-indigo-100 border-y-2">
                            <NavLink to={"/contactme"} className="flex flex-row hover:-translate-x-3 transition-all items-center justify-start gap-8 text-gray-700 p-2 rounded-md font-medium w-full h-fit ">
                                <i className="fa-solid fa-envelope fa-bounce fa-2xl" style={{ color: "black" }}></i>
                                <p className="font-bold text-indigo-950 ">ارتباط با من</p>
                            </NavLink>
                        </li>
                    </ul>
                </motion.div>
                {/* small navbar */}

                <div className="md:hidden flex flex-col bg-indigo-300 dark:bg-slate-300 rounded p-2 shadow-xl dark:shadow-slate-800 shadow-violet-950 w-full h-fit">
                    <button onClick={navopen}>
                        Menu
                    </button>
                    {open ?
                        <ul className="flex flex-col mt-4 gap-3 text-base w-full h-fit">
                            <motion.li initial={{ x: "100rem" }} animate={{ x: 0 }} transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }} className="block transition delay-100 rounded-md p-4 hover:bg-indigo-400 dark:hover:bg-slate-400 focus:shadow-outline w-full h-fit dark:border-slate-800 border-indigo-100 border-y-2">
                                <NavLink to={"/"} className="flex flex-row hover:-translate-x-3 transition-all items-center justify-start gap-8 text-gray-700 p-2 rounded-md font-medium w-full h-fit ">
                                    <i className="fa-solid fa-users-between-lines fa-2xl" style={{ color: "black" }}></i>
                                    <p className="font-bold text-indigo-950 ">صفحه اصلی</p>
                                </NavLink>
                            </motion.li>
                            <motion.li initial={{ x: "-100rem" }} animate={{ x: 0 }} transition={{ duration: 0.9, type: "tween", ease: "easeInOut" }} className="block transition delay-100 rounded-md p-4 hover:bg-indigo-400 dark:hover:bg-slate-400 focus:shadow-outline w-full h-fit dark:border-slate-800 border-indigo-100 border-y-2">
                                <NavLink to={"/intro"} className="flex flex-row hover:-translate-x-3 transition-all items-center justify-start gap-8 text-gray-700 p-2 rounded-md font-medium w-full h-fit ">
                                    <i className="fa-solid fa-users-between-lines fa-2xl" style={{ color: "black" }}></i>
                                    <p className="font-bold text-indigo-950 ">معرفی و اهداف</p>
                                </NavLink>
                            </motion.li>
                            <motion.li initial={{ x: "100rem" }} animate={{ x: 0 }} transition={{ duration: 1, type: "tween", ease: "easeInOut" }} className="block transition delay-100 rounded-md p-4 hover:bg-indigo-400 dark:hover:bg-slate-400 focus:shadow-outline w-full h-fit dark:border-slate-800 border-indigo-100 border-y-2">
                                <NavLink to={"/education"} className="flex flex-row items-center hover:-translate-x-3 transition-all justify-start gap-8 text-gray-700 p-2 rounded-md font-medium w-full h-fit ">
                                    <i className="fa-solid fa-user-graduate fa-2xl" style={{ color: "black" }}></i>
                                    <p className="font-bold text-indigo-950 ">تحصیلات</p>
                                </NavLink>
                            </motion.li>
                            <motion.li initial={{ x: "-100rem" }} animate={{ x: 0 }} transition={{ duration: 1.2, type: "tween", ease: "easeInOut" }} className="block transition delay-100 rounded-md p-4 hover:bg-indigo-400 dark:hover:bg-slate-400 focus:shadow-outline w-full h-fit dark:border-slate-800 border-indigo-100 border-y-2">
                                <NavLink to={"contactme"} className="flex flex-row items-center hover:-translate-x-3 transition-all justify-start gap-8 text-gray-700 p-2 rounded-md font-medium w-full h-fit ">
                                    <i className="fa-solid fa-envelope fa-bounce fa-2xl" style={{ color: "black" }}></i>
                                    <p className="font-bold text-indigo-950 ">ارتباط با من</p>
                                </NavLink>
                            </motion.li>
                        </ul> : null}
                </div>


                <div className="lg:w-9/12 md:w-8/12 w-full mb-28">
                    <div className="p-4 text-gray-500 relative gap-5">
                        <div className="absolute md:top-3 md:left-3 top-2 left-5 bg-violet-200 dark:bg-slate-600 w-24 h-24 rounded-full flex justify-center items-center ">
                            {dark ? <button onClick={darklight} className="w-fit h-fit">
                                <i className="fa-solid fa-lightbulb fa-2xl animate-pulse"></i>
                                <p className="text-white font-semibold"> dark-mode </p>
                            </button> :
                                <button onClick={darklight} className="w-fit h-fit text-white">
                                    <i className="fa-regular fa-lightbulb fa-2xl animate-pulse"></i>
                                    <p className="text-violet-800 font-semibold">light-mode</p>
                                </button>
                            }
                        </div>

                    </div>
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Navbar;