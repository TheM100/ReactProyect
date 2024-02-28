import React from "react";
import Button from "../../Components/Button";
import AsideNewPost from "../../Components/AsideNewPost/AsideNewPost";
import NewPostForm from "../../Components/NewPostForm";
import { RiSettingsLine } from "react-icons/ri";


function NewPost() {
    return (
        <>
            <header className=" bg-gray-100 flex items-center gap-5 justify-between px-10 py-2">
                <div className="flex items-center">
                    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
                    <h2 className="font-bold">Create Post</h2>
                </div>

                <div className="flex gap-5">

                    <Button text="Edit" variant="" />
                    <Button text="Preview" />
                </div>
            </header>

            <div className="flex justify-between bg-gray-100 pl-24">
                <NewPostForm />
                <AsideNewPost />
            </div>

            <div className="bg-gray-100 flex buttonWrapper gap-5 items-center pl-24 pt-14">

                <Button text="Publish" />
                <Button text="Save draft" />
                <a href="">
                    <RiSettingsLine />
                </a>
                <Button text="Revert new changes" />
            </div>
        </>
    )
}

export default NewPost