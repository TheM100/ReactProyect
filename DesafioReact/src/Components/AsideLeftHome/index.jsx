// import { Link } from "react-router-dom";

export default function AsideLeftHome() {
    return (
        <aside className="text-black">
            <nav className="my-4">
                <ul className="cursor-pointer">
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        {/* icono home png */}
                        <img
                            src="https://img.icons8.com/color/48/home--v1.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="/">Home</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/avantgarde/100/overview-pages-3.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">Reading List</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/fluency/48/microphone.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">Podcast</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/emoji/48/movie-camera-emoji.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">Videos</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/office/16/tags.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">Tags</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/fluency/48/light--v1.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">FAQ</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/emoji/48/shopping-bags.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">Forem Shop</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/fluency/48/filled-like--v1.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">Advertise on DEV</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/pulsar-color/48/about.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">About</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/fluency/48/french-horn.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">Contact</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/isometric/50/open-book.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">Guides</Link> */}
                    </li>
                    <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
                        <img
                            src="https://img.icons8.com/emoji/48/thinking-face.png"
                            className="w-6 h-6"
                        />
                        {/* <Link to="#">Software comparisons</Link> */}
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
