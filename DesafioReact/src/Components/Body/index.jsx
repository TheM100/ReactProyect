import React, { useState, useEffect } from "react";
import AsideLeftHome from "../AsideLeftHome";
import MainHome from "../MainHome";
import AsideRightHome from "../AsideRightHome";

function Body(props) {

    const [PostTitleSearch, setPostTitleSearch] = useState("")

    useEffect(() => {
        setPostTitleSearch(props.PostBuscado);
    }, [props.PostBuscado]);




    return (
        // <body className="bg-blue-500">
        //     <h1>Here's the body</h1>
        // </body>
        // dic que tenga un margin en x automatico para centrar el contenido
        <div className="mx-auto max-w-screen-xl p-4">
            <div className="grid grid-cols-[20%,60%,20%] gap-4">
                <AsideLeftHome />
                <MainHome postTitleB={PostTitleSearch} />
                <AsideRightHome />
            </div>
        </div>
    );
}

export default Body;
