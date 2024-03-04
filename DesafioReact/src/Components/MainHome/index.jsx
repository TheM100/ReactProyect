import React, { useEffect, useState } from 'react'
import { get } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getPosts } from '../../api/postsApi'
import PostCard from '../PostCard'

export default function MainHome(props) {
    const [posts, setPosts] = useState([])
    //console.log("this is only shit:  ",posts)
    const[postTitleToSearch,setpostTitleToSearch] = useState("")
    const [filteredPost, setFilteredPost] = useState(null); //mapear este para mostrar

     useEffect(() => {
        setpostTitleToSearch(props.postTitleB);
    }, [props.postTitleB]);

    useEffect(()=>{
        if (!postTitleToSearch) {
            setFilteredPost(null);
            console.log('filtro vacio') // Si no hay valor, mostrar todos los trabajos
            
        }

        const filtered = posts.filter(post => {
            //return console.log(post.title)
            return post.title.toLowerCase().includes(postTitleToSearch.toLowerCase());
        });
        setFilteredPost(filtered);
        console.log(filteredPost)

        
        
    },[postTitleToSearch])


   


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

    // console.log('PostsState:', posts);

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
            {
                posts.map((post) => {
                    //console.log('Post:', post);
                    return (
                        <PostCard postData={post} key={post._id} />
                    )
                })
            }

        </main>
    )
}
