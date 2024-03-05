import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../api/postsApi'
import PostCard from '../PostCard'

export default function MainHome(props) {
    const [posts, setPosts] = useState([])
    const [postTitleToSearch, setpostTitleToSearch] = useState("")
    const [filteredPost, setFilteredPost] = useState([]);
    const [postNavFilter, setPostNavFilter] = useState("Relevant") //mapear este para mostrar

    useEffect(() => {
        setpostTitleToSearch(props.postTitleB || "");
    }, [props.postTitleB]);

    useEffect(() => {
        if (postTitleToSearch !== "") {
            const filtered = posts.filter(post => {
                //return console.log(post.title)
                return post.title.toLowerCase().includes(postTitleToSearch.toLowerCase());
            });
            setFilteredPost(filtered);
            console.log(filteredPost)
        }



    }, [postTitleToSearch, posts])

    // useEffect(()=>{
    //     if(filteredPost.length===0){
    //         console.log('array de post filtrados VACIO')
    //     }
    // },[filteredPost])


    useEffect(() => {
        const todayTimestamp = new Date();
        console.log(todayTimestamp)
        //Tue Mar 05 2024 09:27:47 GMT-0600 (hora estándar central)

        if (postNavFilter === "Latest") {
            const filtered = posts.filter(post => {
                const postDate = new Date(post.date)
                console.log(postDate)
                //2024-03-04T22:30:57.064Z
                const sameDay = todayTimestamp.getDate() === postDate.getDate() &&
                    todayTimestamp.getMonth() === postDate.getMonth() &&
                    todayTimestamp.getFullYear() === postDate.getFullYear()

                console.log(sameDay)
                return sameDay;
            });
            setFilteredPost(filtered);
            console.log(filteredPost)

        } else if (postNavFilter === "Top") {
            const filtered = posts.filter(post => post.relevant === true);
            ;
            setFilteredPost(filtered);

        } else if (postNavFilter === "Relevant") {

            setFilteredPost([]);

        }


    }, [postNavFilter, posts])




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
        <main className="text-black ">
            <header>
                <nav className="text-black items-start h-15">
                    <ul className="flex flex-row text-lg">
                        <li className="hover:bg-white/50 hover:text-blue-700 p-3" onClick={() => { setPostNavFilter("Relevant") }}>
                            <Link to="#" className="font-bold">
                                Relevant
                            </Link>
                        </li>
                        <li className="hover:bg-white/50 hover:text-blue-700 p-3" onClick={() => { setPostNavFilter("Latest") }}>
                            <Link to="">Latest</Link>
                        </li>
                        <li className="hover:bg-white/50 hover:text-blue-700 p-3" onClick={() => { setPostNavFilter("Top") }}>
                            <Link to="">Top</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='flex flex-col'>

                {filteredPost.length === 0 && postTitleToSearch !== "" && (
                    <div>No se encontraron resultados</div>
                )}
                {(filteredPost.length > 0 ? filteredPost : posts).map(post => (
                    <PostCard postData={post} key={post._id} />
                ))}
            </div>



        </main>
    )
}
