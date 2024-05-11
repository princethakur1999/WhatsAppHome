

import Chats from "./Chats"
import Chatbox from "./Chatbox"

export default function Whatsapp() {

    return (

        <div className="h-[92%] w-[95%]  bg-slate-50 rounded-lg border flex justify-between">

            <Chats />

            <Chatbox />

        </div>
    )
}
