
import Tags from "../Tags"


const Post =  (props) =>{
 
const {postImage, username, title, hashtags} = props.postInfo;
// console.log(hashtags)

    
    return (
        <>
        <div className="w-full mt-5   border rounded-t-3xl">
            <div className="w-full h-auto border rounded-t-3xl">
                    <img className="object-cover border rounded-t-3xl" src={postImage} alt=""/>
            </div>
                <div className=" mt-5">
                    <div className="w-2/3  ml-20">
                        <div className=" w-2/3 flex">
                            <div className="w-2/12 border rounded-full">
                                <img  className="object-cover border rounded-full" src={props.profile}
                                alt=""/>
                            </div>
                            <div className="mt-4">
                               
                                <h4 className="font-bold text-lg">{username}</h4>
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

                <h2 className="ml-20 font-bold text-6xl"><a href="">{title}</a></h2>

                <div className=" w-1/2 ml-20 flex justify-around font-semibold text-ms my-5">
                    {hashtags && hashtags.map((tag , index) =>(
                        <Tags key={index} tagName = {tag}/>
                    ))}  
                </div>
                    
        </div> 
        </>
    )
}

export default Post