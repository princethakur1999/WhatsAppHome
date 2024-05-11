import { chats } from './../data.js';

import { FiEdit } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";


export default function Chats() {

    return (

        <div className="w-[30%] h-full border-r flex flex-col px-4 py-6">


            <div className='h-[90px] w-full flex flex-col justify-between'>

                <div className='w-full flex justify-between'>

                    <span className='text-xl font-bold'>Chats</span>

                    <div className='w-[20%] flex justify-between items-center text-lg'>

                        <FiEdit />

                        <BsFilter />
                    </div>
                </div>

                <input
                    className='p-2 my-2 border outline-none border-b-green-600 border-b-2 rounded-md'
                    type="text"
                    placeholder='Enter or start a new chat'
                />
            </div>


            {
                chats.map((chat, index) => {

                    return <div className='w-full flex justify-start items-center gap-6 py-2 pl-4 hover:bg-slate-200 rounded-md' key={index}>

                        <img src={chat.photo} alt="chat" className='w-[50px] h-[50px] rounded-full' />

                        <span className='text-sm text-slate-600 font-semibold'>
                            {
                                chat.name
                            }
                        </span>
                    </div>
                })
            }
        </div>
    )
}
