import { useContext } from "react";
import error404 from "%PUBLIC_URL%/../assets/error/Comp 2-min.gif";
import { useNavigate } from "react-router-dom";
import { darkmodecontext } from "%PUBLIC_URL%/../contexts/darkmodecontext";
import { useEffect } from "react";

const Notfound = () => {
    const navigate = useNavigate();
    const { dark, setdark } = useContext(darkmodecontext);

    useEffect(() => {
        // setdark(!dark)
        console.log(dark);
    }, [dark]);

    const darklight = () => {
        // let sessionDarkmode=sessionStorage.getItem("darkMode");
        setdark(!dark);
        console.log(dark);
        dark ? document.getElementById('html').setAttribute("class", "dark") : document.getElementById("html").removeAttribute("class");
    };

    return (
        <>
            <div className="w-full min-h-[41rem] flex dark:bg-blue-900 dark:from-sky-700 dark:to-slate-300 bg-gradient-to-b from-violet-200 to-violet-50 relative">
                <div className="absolute md:top-16 top-10 left-16 bg-transparent w-28 h-28 rounded-full flex justify-center items-center">
                    {dark ? <button onClick={darklight} className="w-fit h-fit animate-bounce">
                        <i className="fa-regular fa-lightbulb fa-2xl"></i>
                        <p>light-mode</p>
                    </button> :
                        <button onClick={darklight} className="w-fit h-fit animate-bounce">
                            <i className="fa-solid fa-lightbulb fa-2xl"></i>
                            <p>dark-mode</p>
                        </button>

                    }


                </div>
                <div className="flex flex-col w-full max-h-fit justify-center items-start text-center gap-2">
                    <div className="grid grid-cols-1 grid-rows-2 w-full gap-3 mt-4 justify-center content-center items-center">
                        <h2 className="font-bold mb-4 text-center">گشتم نبود نگرد نیست ای دوست ...</h2>
                        <i className="fa-solid fa-cross fa-xl text-[#590264] h-12 flex"></i>
                    </div>
                    <div className="w-full h-fit flex justify-center items-start">
                        <img src={error404} className="w-[70%] h-[35rem] shadow-2xl rounded-lg shadow-violet-500" alt="error404" />
                    </div>
                    <div className="w-full h-fit my-4">
                        <button onClick={() => {
                            navigate('/')
                        }}
                            className="bg-blue-900 text-white p-3 rounded-lg shadow-xl hover:scale-105 transition delay-150 duration-100">بازگشت به صفحه اصلی</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notfound;