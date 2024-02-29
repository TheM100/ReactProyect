import Header from "../../Components/Header"


const PostDetail = ()=>{
    return(
        <>
        <Header />
        <section className="w-full h-screen flex overflow-hidden ">
            <aside className="w-2/12 h-screen bg-red-500 relative">
                <div className="w-1/3 h-1/2 bg-green-500 absolute left-36 top-20"> 
                    <h3>aqui las reacciones</h3>
                </div>
            </aside>
            <div className="w-7/12 h-screen bg-green-400 flex flex-col justify-center gap-2 ">
               <div className="w-2/3 h-2/4 bg-blue-700"></div>
               <div className="w-2/3 h-2/4 bg-blue-700"></div>
               
              
            </div>
            <aside className="w-3/12 h-screen bg-red-500">
            <h1>here las reacciones</h1>
            </aside>
        </section>
        
        </>
    )
}

export default PostDetail