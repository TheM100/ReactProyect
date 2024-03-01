import React from "react";
import { useState, useEffect } from "react";

function AsideNewPost({ postTips }) {




    return (
        <>
            {postTips === "publishHover" &&
                (<div className="pl-10 w-96 flex flex-col gap-5 justify-center">
                    <h4 className="font-bold">Publishing Tips</h4>
                    <ul className="list-disc flex flex-col gap-4">
                        <li>
                            Ensure your post has a cover image set to make the most of the home feed and social media platforms.</li>
                        <li>
                            Share your post on social media platforms or with your co-workers or local communities.</li>
                        <li>
                            Ask people to leave questions for you in the comments. It's a great way to spark additional discussion describing personally why you wrote it or why people might find it helpful.</li>
                    </ul>
                </div>)
            }

            {postTips === "titleHover" && (
                <div className="pl-10 w-96 flex flex-col gap-5 justify-center">
                    <h4 className="font-bold">Writing a Great Post Title
                    </h4>
                    <ul className="list-disc flex flex-col gap-4">
                        <li>
                            Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                        <li>
                            Use keywords where appropriate to help ensure people can find your post by search.</li>
                    </ul>
                </div>)
            }
            {postTips === "tagsHover" && (
                <div className="pl-10 w-96 flex flex-col gap-5 justify-center">
                    <h4 className="font-bold">Tagging Guidelines</h4>
                    <ul className="list-disc flex flex-col gap-4">
                        <li>Tags help people find your post - think of them as the topics or categories that best describe your post.</li>
                        <li>Add up to four comma-separated tags per post. Use existing tags whenever possible.</li>
                        <li>Some tags have special posting guidelines - double check to make sure your post complies with them.</li>
                    </ul>
                </div>)
            }

            {postTips === "editorHover" && (<div className="pl-10 w-96 flex flex-col gap-5 justify-center">
                <h4 className="font-bold">Editor Basics
                </h4>
                <ul className="list-disc flex flex-col gap-4">
                    <li>Use Markdown to write and format posts.</li>
                    <li>Embed rich content such as Tweets, YouTube videos, etc. Use the complete URL:
                    </li>
                    <li>In addition to images for the post's content, you can also drag and drop a cover image.
                    </li>
                </ul>
            </div>)}



        </>
    )
}

export default AsideNewPost