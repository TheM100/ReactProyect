import { Link } from "react-router-dom";
import { NavigationLinks } from "./NavigationLinks";
import { DevJoinAdd } from "./DevJoinAdd";
export default function AsideLeftHome() {
    return (
        <aside className="text-black">
            {!localStorage.getItem("token") &&

                <DevJoinAdd />
            }
            <nav className="my-4">
                <ul className="cursor-pointer">
                    <NavigationLinks src="https://img.icons8.com/color/48/home--v1.png" text="Home" />
                    <NavigationLinks src="https://img.icons8.com/avantgarde/100/overview-pages-3.png" text="Reading List" />
                    <NavigationLinks src="https://img.icons8.com/fluency/48/microphone.png" text="Podcast" />
                    <NavigationLinks src="https://img.icons8.com/emoji/48/movie-camera-emoji.png" text="Videos" />
                    <NavigationLinks src="https://img.icons8.com/office/16/tags.png" text="Tags" />
                    <NavigationLinks src="https://img.icons8.com/fluency/48/light--v1.png" text="FAQ" />
                    <NavigationLinks src="https://img.icons8.com/emoji/48/shopping-bags.png" text="Forem Shop" />
                    <NavigationLinks src="https://img.icons8.com/fluency/48/filled-like--v1.png" text="Advertise on DEV" />
                    <NavigationLinks src="https://img.icons8.com/pulsar-color/48/about.png" text="About" />
                    <NavigationLinks src="https://img.icons8.com/fluency/48/french-horn.png" text="Contact" />
                    <NavigationLinks src="https://img.icons8.com/isometric/50/open-book.png" text="Guides" />
                    <NavigationLinks src="https://img.icons8.com/emoji/48/thinking-face.png" text="Software comparisons" />
                </ul>
            </nav>
        </aside>
    )
}
