import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../api/postsApi'
import PostCard from '../PostCard'

export default function MainHome(props) {
    const [posts, setPosts] = useState([])
    const[postTitleToSearch,setpostTitleToSearch] = useState("")
    const [filteredPost, setFilteredPost] = useState([]); //mapear este para mostrar

     useEffect(() => {
        setpostTitleToSearch(props.postTitleB || "");
    }, [props.postTitleB]);

    useEffect(()=>{
        if (postTitleToSearch === "") {
            setFilteredPost([]);
            console.log('filtro vacio') // Si no hay valor, mostrar todos los trabajos
            
        }else{
            const filtered = posts.filter(post => {
                //return console.log(post.title)
                return post.title.toLowerCase().includes(postTitleToSearch.toLowerCase());
            });
            setFilteredPost(filtered);  
            console.log(filteredPost) 
        }
               
        
    },[postTitleToSearch,posts])

    // useEffect(()=>{
    //     if(filteredPost.length===0){
    //         console.log('array de post filtrados VACIO')
    //     }
    // },[filteredPost])

    

    
   


    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await getPosts()
            // console.log('Posts:', postsData)
            setPosts(postsData)
        }
        fetchPosts()
    }, [])

    if (posts.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1>Loading...</h1>
            </div>
        )
    }

    

    return (
        <main className="text-black">
            <header>
                <nav className="text-black items-start h-15">
                    <ul className="flex flex-row text-lg">
                        <li className="hover:bg-white/50 hover:text-blue-700 p-3">
                            <Link to="#" className="font-bold">
                                Relevant
                            </Link>
                        </li>
                        <li className="hover:bg-white/50 hover:text-blue-700 p-3">
                            <Link to="https://dev.to/latest">Latest</Link>
                        </li>
                        <li className="hover:bg-white/50 hover:text-blue-700 p-3">
                            <Link to="https://dev.to/top/week">Top</Link>
                        </li>
                    </ul>
                </nav>
            </header>
           
             {filteredPost.length === 0 && postTitleToSearch !== "" && (
                <div>No se encontraron resultados</div>
             )}
            {(filteredPost.length > 0 ? filteredPost : posts).map(post => (
                <PostCard postData={post} key={post._id} />
            ))}



        </main>
    )
}
