import React,{useState} from "react"
import Header from "../../Components/Header"
import Body from "../../Components/Body"


function Principal() {
    const[TextInputHd,setTextInputHd]=useState("")

    function getText(text){
        setTextInputHd(text)
    }
    

    const PostBuscado= TextInputHd;

    return (
        <>
            <Header extractText={getText}/>
            <div className="bg-[#F5F5F5]">
                <Body PostBuscado={PostBuscado} />
            </div>
        </>
    )
}

export default Principal