import { MdMenu } from "react-icons/md";
import { BsChatText } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineModeStandby } from "react-icons/md";


import { FaRegStar } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";





export default function Sidebar() {

    return (

        <div className="h-[92%] w-[5%] flex flex-col justify-between items-center py-4">


            <div className="flex flex-col justify-between gap-6 text-lg">
                <div>
                    <MdMenu />
                </div>

                <div>
                    <BsChatText />
                </div>

                <div>
                    <IoCallOutline />
                </div>

                <div>
                    <MdOutlineModeStandby />
                </div>
            </div>



            <div className="flex flex-col justify-between gap-6 text-lg">

                <div>
                    <FaRegStar />
                </div>

                <div>
                    <FaArchive />
                </div>

                <div className="border w-full">

                </div>

                <div>
                    <IoSettingsOutline />
                </div>

                <div>
                    <CgProfile />
                </div>

            </div>

        </div>
    )
}
