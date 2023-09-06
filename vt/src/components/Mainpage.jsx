import { useEffect, useRef } from "react";
import profilepic from "../assets/pics/profilepic.jpg";
import Typed from 'typed.js';
import { toast, ToastContainer, Zoom } from 'react-toastify';
// import { darkmodecontext } from "../contexts/darkmodecontext";
import { motion } from "framer-motion";
function Mainpage() {
    const myname = useRef(null);
    // const { dark } = useContext(darkmodecontext);
    useEffect(() => {
        const typed = new Typed(myname.current, {
            strings: ["سلام دوست عزیز!", "من امیرحسین جوری سهرابی هستم، یک وب دیزاینر تازه کار و پرانگیزه برای یادگیری ...", "من با مباحثی مثل html ,css ,javascript , bootstrap, Tailwindcss, ReactJs, NodeJS آشناییت خوبی دارم", "و در موارد SQLServer , VueJS , python نیز به صورت سطحی آشناییت دارم"],
            typeSpeed: 70,
            backSpeed: 20,
            backDelay: 2000,
            smartBackspace: true,
            loop: true,
            showCursor: false
        });
        toast.info("خوش آمدی دوست من", {
            className: "mydarktoast",
            icon: "",
            delay: 1500,
            draggable: true,
            autoClose: 3000,
            transition: Zoom,
            closeButton: false,
            rtl: true,
            pauseOnHover: false,

        });
        return () => {
            typed.destroy();
            toast.dismiss();
        };

    }, []);
    return (
        <>
            <ToastContainer position="top-center" />
            <div className="lg:w-[85%] md:w-[80%] w-[75%] h-fit relative m-3" >
                <motion.img initial={{ x: '-100rem' }} animate={{ x: 0 }} transition={{delay:0.5, duration:1}}
                    className="w-full h-full rounded-md" src={profilepic} alt="profilepic" />
                <div className="absolute xl:bottom-[30%] xl:right-[3%] sm:bottom-[30%] sm:right-[3%] bottom-[25%] right-[0%] flex flex-row">
                    <h1 className="font-extrabold sm:text-lg text-sm text-violet-900 dark:text-slate-900 p-3 rounded-lg bg-violet-400 dark:bg-slate-400" ref={myname}></h1>
                </div>
            </div>
        </>
    )
}



export default Mainpage;