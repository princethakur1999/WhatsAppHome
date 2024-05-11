
import Whatsapp from "./components/Whatsapp";
import Sidebar from "./components/Sidebar";

export default function App() {


    return (

        <div className="h-[100vh] w-[100vw] flex justify-between items-end bg-slate-100 relative">

            <div className="absolute top-1 left-1 flex gap-1 items-center p-2">

                <img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png" className="h-[25px]" alt="app-logo" />

                <span className="text-[12px]">WhatsApp</span>
            </div>



            <Sidebar />

            <Whatsapp />




        </div>
    )
}
