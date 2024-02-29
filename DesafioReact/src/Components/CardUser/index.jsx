const CardUser = () =>{
    return(
        <>
        <div className="w-5/6 mt-5 border rounded-lg relative mx-6 flex flex-col items-center">
                        <div className="w-full h-10p bg-slate-950 rounded-t-lg relative">---</div>
                        <div className="w-full flex  absolute top-3">
                            <div className="w-2/12 ml-4 h-12 border rounded-lg ">
                                <img className="object-f border rounded-lg" src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F2575%2F3da37f64-b46e-4fa5-bf86-01b63ba5f57b.png" alt="" />
                            </div>
                            <span className="font-bold text-lg text-neutral-600 my-5 mx-2 ">
                            CopilotKit  
                            </span>
                        </div>

                            <button className="bg-blue-500 w-5/6 p-2 mt-16  border rounded-lg text-md text-white font-semibold">Follow</button>
                            <p className="mt-5 text-center">Lorem, est facere necessitatibus unde hic, quam porro velit, ipsa repellat qui accusantium pariatur repudiandae magnam sunt aspernatur aut! Facilis, numquam facere?</p>
                   
                        <div className="flex flex-col mt-3  items-start">
                            <span><b>JOINED</b></span>
                            <span>Jan 10, 2024</span>
                        </div>
                    
                        
        </div>
        </>
    )
}

export default CardUser