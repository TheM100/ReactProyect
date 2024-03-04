

const Tags = (props) =>{
    const Tag = props.tagName
    return(
        <>
         <a href="" className=" p-2 text-gray-900 hover:bg-pink-300 rounded-xl hover:text-white">{Tag}</a>
        </>
    )
}

export default Tags