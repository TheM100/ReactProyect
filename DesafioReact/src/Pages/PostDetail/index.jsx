import Header from "../../Components/Header"


const PostDetail = ()=>{
    return(
        <>
        <Header />
        <section className="w-full h-screen flex  overflow-y-auto">
            <aside className="w-2/12 h-screen bg-neutral-100 fixed flex flex-col">
                <div className="w-1/3 h-1/2  absolute left-40 top-24 flex flex-col justify-around  mt-4"> 
                
                <button className="flex flex-col items-center">
                    <span  className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            role="img" aria-hidden="true" class="crayons-icon">
                            <g clip-path="url(#clip0_988_3276)">
                                <path
                                    d="M19 14V17H22V19H18.999L19 22H17L16.999 19H14V17H17V14H19ZM20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.992L19.059 11.574C20.39 10.05 20.32 7.65998 18.827 6.16998C17.324 4.67098 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09103 4.60598 6.67503 4.66798 5.17203 6.17198C3.68203 7.66198 3.60703 10.047 4.98003 11.623L13.412 20.069L12 21.485L3.52003 12.993C1.41603 10.637 1.49503 7.01898 3.75603 4.75698C6.02103 2.49298 9.64403 2.41698 12 4.52898C14.349 2.41998 17.979 2.48998 20.242 4.75698H20.243Z"
                                    fill="#525252"></path>
                            </g>
                            
                        </svg>
                    </span>
                    <span className="flex items-center justify-center mt-1">
                        58
                    </span>
                </button>
                <button className="flex flex-col items-center">
                    <span className="flex items-center justify-center ">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" role="img" aria-hidden="true" class="crayons-icon">
                            <path
                                d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z">
                            </path>
                        </svg>
                    </span>
                    <span className="flex items-center justify-center mt-1">
                        58
                    </span>
                </button>
                <button className="flex flex-col items-center">
                    <span id="iconShare" class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                            aria-hidden="true" class="crayons-icon">
                            <path
                                d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z">
                            </path>
                        </svg>
                    </span>
                    <span className="d-flex align-items-center justify-content-center mt-1">
                        58
                    </span>
                </button>
                <button id="more" className="flex flex-col items-center">
                    <span className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img"
                            aria-labelledby="asrz593fzt7w9qvysd5jtqol4f7q1t3u" aria-hidden="true"
                            class="crayons-icon dropdown-icon">
                            <title id="asrz593fzt7w9qvysd5jtqol4f7q1t3u">More...</title>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
                
            </aside>
        <div className="w-7/12 h-screen bg-neutral-100 flex flex-col  ml-[16.666667%] ">
            <div className="w-full mt-5   border rounded-t-3xl">
                <div className="w-full border rounded-t-3xl">
                    <img className="object-cover border rounded-t-3xl" src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr9c933347t7shbh8x2ik.gif" alt=""/>
                </div>
                <div className=" mt-5">
                    <div className="w-2/3  ml-20">
                        <div className=" w-2/3 flex">
                            <div className="w-2/12 border rounded-full">
                                <img  className="object-cover border rounded-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--uow_1noY--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/551686/f0514090-260b-4a34-89b0-a2b6e922d5ec.jpg"
                                alt=""/>
                            </div>
                            <div className="mt-4">
                                <h4 className="font-bold text-lg">Mateusz Charytoniuk</h4>
                                <h5>Nov 16</h5>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-4">
                        <span className="w-5/12  flex justify-around ml-20">
                            <span class="1"><img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                     width="35" height="35"/></span>
                            <span class="2"><img
                                    src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                    width="35" height="35"/></span>
                            <span class="3"><img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="35" height="35"/></span>
                            <span class="4"><img
                                    src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                     width="35" height="35"/></span>
                            <span class="5"><img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="35" height="35"/></span>
                         </span>

                </div>
                <h2 className="ml-20 font-bold text-6xl"><a href="">Release Radar • February 2024 Edition</a></h2>
                <div className=" w-1/2 ml-20 flex justify-around font-semibold text-ms my-5">
                    <a href="" class="a1">#programming</a>
                    <a href="" class="a2">#beginners</a>
                    <a href="" class="a3">#career</a>
                    <a href="" class="a4">#productivity</a>
                </div>
                    
            </div>      
        </div>
            <aside className="w-3/12 h-screen bg-neutral-100 ">
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
            </aside>
        </section>
        
        </>
    )
}

export default PostDetail