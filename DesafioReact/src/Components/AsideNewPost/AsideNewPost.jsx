import React from "react";
import { useState, useEffect } from "react";

function AsideNewPost() {

    const [postTips, setPostTips] = useState(true)



    return (
        <>

            {postTips &&
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
            }

            {!postTips &&
                <div className="pl-10 w-96 flex flex-col gap-5 justify-center">
                    <h4 className="font-bold">Writing a Great Post Title
                    </h4>
                    <ul className="list-disc flex flex-col gap-4">
                        <li>
                            Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                        <li>
                            Use keywords where appropriate to help ensure people can find your post by search.</li>
                    </ul>
                </div>
            }


        </>
    )
}

export default AsideNewPost