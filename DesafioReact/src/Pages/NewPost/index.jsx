import React from "react";
import Button from "../../Components/Button";
import AsideNewPost from "../../Components/AsideNewPost/AsideNewPost";
import NewPostForm from "../../Components/NewPostForm";

function NewPost() {
    return (
        <>
            <header className="bg-green-500 flex items-center gap-5 justify-between">
                <div className="flex items-center">
                    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
                    <h2 className="font-bold">Create Post</h2>
                </div>

                <div className="flex gap-5">

                    <Button text="Edit" variant="" />
                    <Button text="Preview" />
                </div>
            </header>

            <div className="flex">
                <NewPostForm />
                <AsideNewPost />


            </div>
            <div className="flex buttonWrapper gap-5">

                <Button text="Publish" />
                <Button text="Save draft" />
            </div>
        </>
    )
}

export default NewPost