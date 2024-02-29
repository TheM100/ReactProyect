import CardUser from "../../Components/CardUser"
import Header from "../../Components/Header"
import Post from "../../Components/Post"
import Reactions from "../../Components/Reactions"



const PostDetail = ()=>{
    return(
        <>
        <Header />
        <section className="w-full h-screen flex  overflow-y-auto">
            <aside className="w-2/12 h-screen bg-neutral-100 fixed flex flex-col">
                <Reactions/>
            </aside>
            <div className="w-7/12  bg-neutral-100 flex flex-col  ml-[16.666667%] ">
                <Post/>     
            </div>
            <aside className="w-3/12 h-screen bg-neutral-100 ">
                <CardUser/>
            </aside>
        </section>
        
        </>
    )
}

export default PostDetail