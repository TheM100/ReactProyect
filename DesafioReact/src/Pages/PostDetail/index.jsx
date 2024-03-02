import { useEffect , useState } from "react"
import CardUser from "../../Components/CardUser"
import Header from "../../Components/Header"
import Post from "../../Components/Post"
import Reactions from "../../Components/Reactions"
import { useParams } from "react-router-dom"
import { getPostById } from "../../api/postsApi"
import { getUsers } from "../../api/postsApi"



const PostDetail = ()=>{

   

    const params = useParams();
    //console.log("Parametros URL: ",params)
    const[PostData, setPostData] = useState({})
    const[User,SetUser]= useState({})
    //console.log(PostData.username)
    

    useEffect( ()=>{
        async function GetPostId() {
            const postExtractById = await getPostById(params.id)
            //console.log(postExtractById)
            setPostData(postExtractById)
        }
        async function GetUser() {
            const usersBD = await getUsers()
            console.log(usersBD)
            SetUser(usersBD)
        }
       
        GetPostId()
        GetUser()
      
    },[])
    


    return(
        <>
        <Header />
        <section className="w-full h-screen flex  overflow-y-auto">
            <aside className="w-2/12 h-screen bg-neutral-100 fixed flex flex-col">
                <Reactions/>
            </aside>
            <div className="w-7/12  bg-neutral-100 flex flex-col  ml-[16.666667%] ">
                <Post postInfo = {PostData}/>  
            </div>
            <aside className="w-3/12 h-screen bg-neutral-100 ">
                <CardUser/>
            </aside>
        </section>
        
        </>
    )
}

export default PostDetail