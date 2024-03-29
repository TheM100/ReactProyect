import React from "react";
import Button from "../../Components/Button";
import AsideNewPost from "../../Components/AsideNewPost/AsideNewPost";
import NewPostForm from "../../Components/NewPostForm";
import { useState } from "react";
import { RiSettingsLine } from "react-icons/ri";
import { postNew } from "../../api/postsApi";
import { Link } from "react-router-dom";


function NewPost() {


    const [postTips, setPostTips] = useState("")

    return (
        <>
            <header className=" bg-gray-100 flex items-center justify-between px-5 py-2">
                <div className="flex items-center">
                    <Link to="/">
                        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" className="h-11" />
                    </Link>
                    <h2 className="font-bold pl-4">Create Post</h2>
                </div>

                <div className="flex pr-96">

                    <Button text="Edit" variant="transparent" className="font-bold" />
                    <Button text="Preview" variant="transparent" />
                </div>
            </header>

            <div className="flex justify-between bg-gray-100 pl-24 overflow-y-auto">
                <NewPostForm postNew={(data) => postNew(data)} setPostTips={(data) => { setPostTips(data) }} />
                <AsideNewPost postTips={postTips} />
            </div>

            {/* <div className="bg-gray-100 flex buttonWrapper gap-5 items-center pl-24 pt-5">

                <Button text="Publish" variant="primary" className="font-bold" />
                <Button text="Save draft" variant="transparent" />
                <a href="">
                    <RiSettingsLine />
                </a>
                <Button text="Revert new changes" variant="transparent" />
            </div> */}
        </>
    )
}

export default NewPost