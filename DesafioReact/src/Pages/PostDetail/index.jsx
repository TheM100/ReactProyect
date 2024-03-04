import { useEffect , useState } from "react"
import CardUser from "../../Components/CardUser"
import Header2 from "../../Components/Header2"
import Post from "../../Components/Post"
import Reactions from "../../Components/Reactions"
import { useParams } from "react-router-dom"
import { getPostById } from "../../api/postsApi"
import { getUsers } from "../../api/postsApi"



const PostDetail = ()=>{

   

    const params = useParams();

    const[PostData, setPostData] = useState({})
    const[Users,SetUser]= useState([])
    const[userInfo,setUserinfo] = useState({})
    const userPost = PostData.username
    const profile = userInfo.profilePicture
    // console.log(userPost)
    // console.log(Users)
    console.log(userInfo)
    
    

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

    useEffect(()=>{
        function buscarPorUsername(username, objetos) {
            for (let clave in objetos) {
                if (objetos.hasOwnProperty(clave)) {
                    if (objetos[clave].username === username) {
                        setUserinfo(objetos[clave]);
                        // console.log(objetos[clave]);
                    }
                }
            }
            return null; // Retorna null si no se encuentra el usuario
        }
        buscarPorUsername(userPost,Users)
    },[PostData])
    


    return(
        <>
        <Header2 />
        <section className="w-full h-screen flex  overflow-y-auto">
            <aside className="w-2/12 h-screen bg-neutral-100 fixed flex flex-col">
                <Reactions/>
            </aside>
            <div className="w-7/12  bg-neutral-100 flex flex-col  ml-[16.666667%] ">
                <Post postInfo = {PostData} profile={profile} />  
            </div>
            <aside className="w-3/12 h-screen bg-neutral-100 ">
                <CardUser userToCard={userInfo}/>
            </aside>
        </section>
        
        </>
    )
}

export default PostDetail