import React from "react";

function AsideNewPost() {
    return (
        <>
            <div className="pl-10 w-96 flex flex-col gap-5 justify-center">
                <h4 className="font-bold">Publishing Tips</h4>
                <ul className="list-disc flex flex-col gap-4">
                    <li>
                        Ensure your post has a cover image set to make the most of the home feed and social media platforms.</li>
                    <li>
                        Share your post on social media platforms or with your co-workers or local communities.</li>
                    <li>
                        Ask people to leave questions for you in the comments. It's a great way to spark additional discussion describing personally why you wrote it or why people might find it helpful.</li>
                </ul>
            </div>
        </>
    )
}

export default AsideNewPost