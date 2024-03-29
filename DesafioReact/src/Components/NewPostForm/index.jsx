import React from "react";
import { useForm } from 'react-hook-form';
import Button from "../Button";
import { RiSettingsLine } from "react-icons/ri";
import { postNew } from "../../api/postsApi";
import { Link, useNavigate } from "react-router-dom";


function NewPostForm({ postNew, setPostTips }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const navigate = useNavigate()

    const sendData = async (data) => {
        console.log(data)
        await postNew(data);
        navigate('/')
    }





    return (
        <>
            <div className="bg-white border border-solid rounded-lg pt-10 px-16 h-screen ">

                <form className='flex flex-col gap-5' onSubmit={handleSubmit(sendData)}>


                    <Button text='Add cover image' type="file" variant="light" className="font-bold border-2 border-zinc-300 w-44 " />
                    {/* <label value='Add cover image' type="file" variant="light" className="font-bold border-2 border-zinc-300 w-44 " />
                    <input type="file" accept="image/*"  ></input> */}

                    <input className="hidden" {...register('postImage')} value="https://picsum.photos/835/351" />
                    <input className="hidden" {...register('username')} value="Gerardo" />
                    <input className="hidden" {...register('profilePicture')} value="https://instagram.fgdl9-1.fna.fbcdn.net/v/t51.2885-19/69361288_364074587856863_787347129755500544_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgdl9-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=n4hNJvlBTMgAX-0d_mo&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCx6zEt8wpzg_dtdXcGpd-vevM5ZBClZ4p6HtZ1rva82w&oe=65E5470D&_nc_sid=ee9879" />
                    <input className="hidden" {...register('date')} value={new Date()} />

                    <input {...register('title', { required: "Post title is required." })} className="text-5xl font-bold" placeholder="New post title here..." onClick={() => { setPostTips("titleHover") }} />
                    {errors.postTitle && <p>Post title is required.</p>}

                    <input {...register('hashtags')} placeholder="Add up to 4 tgs..." onClick={() => { setPostTips("tagsHover") }} />
                    {errors.postTags && <p>Post tags separated by commas.</p>}

                    {/* Toolbar */}
                    <div className="bg-gray-100 py-4">
                        <div className="editor-toolbar flex items-center gap-4 sticky">
                            <a tabIndex="0" aria-label="Bold"
                                className="c-btn c-btn--icon-alone crayons-tooltip__activator toolbar-btn mr-1">
                                <svg height="24" viewBox="0 0 24 24" width="24" className="crayons-icon">
                                    <path
                                        d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.501 4.501 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z">
                                    </path>
                                </svg>
                            </a>

                            <a className="c-btn c-btn--icon-alone crayons-tooltip__activator toolbar-btn mr-1">
                                <svg height="24" viewBox="0 0 24 24" width="24" className="crayons-icon">
                                    <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z"></path>
                                </svg>
                            </a>

                            <a className="c-btn c-btn--icon-alone crayons-tooltip__activator toolbar-btn mr-1">
                                <svg height="24" viewBox="0 0 24 24" width="24" className="crayons-icon">
                                    <path
                                        d="M18.364 15.536 16.95 14.12l1.414-1.414a5.001 5.001 0 0 0-3.531-8.551 5 5 0 0 0-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 1 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z">
                                    </path>
                                </svg>
                            </a>

                            <a className="c-btn c-btn--icon-alone crayons-tooltip__activator toolbar-btn mr-1">
                                <svg height="24" viewBox="0 0 24 24" width="24" className="crayons-icon">
                                    <path
                                        d="M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z">
                                    </path>
                                </svg>
                            </a>

                            <a className="c-btn c-btn--icon-alone crayons-tooltip__activator toolbar-btn mr-1">
                                <svg height="24" viewBox="0 0 24 24" width="24" className="crayons-icon">
                                    <path
                                        d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8zm0 7h13v2H8z">
                                    </path>
                                </svg>
                            </a>

                            <a className="c-btn c-btn--icon-alone crayons-tooltip__activator toolbar-btn mr-1">
                                <svg height="24" viewBox="0 0 24 24" width="24" className="crayons-icon">
                                    <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"></path>
                                </svg>
                            </a>

                            <a className="c-btn c-btn--icon-alone crayons-tooltip__activator toolbar-btn mr-1">
                                <svg height="24" viewBox="0 0 24 24" width="24" className="crayons-icon">
                                    <path
                                        d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z">
                                    </path>
                                </svg>
                            </a>

                            <a type="button" tabIndex="-1" aria-label="Upload image" className="c-btn c-btn--icon-alone crayons-tooltip__activator toolbar-btn formatter-btn mr-1"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="crayons-icon c-btn__icon"><path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"></path></svg><span data-testid="tooltip" className="crayons-tooltip__content">
                                {/* <span aria-hidden="true">Upload image</span> */}
                            </span>
                            </a>
                            <button type="button" id="overflow-menu-button" aria-expanded="false" aria-haspopup="true" tabIndex="-1" aria-label="More options" className="c-btn c-btn--icon-alone toolbar-btn ml-auto"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="crayons-icon c-btn__icon"><path fillRule="evenodd" clipRule="evenodd" d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path></svg></button>

                        </div>
                    </div>

                    <input {...register('contenido', { required: "Post content is required." })} placeholder="Write your post content here..." onClick={() => { setPostTips("editorHover") }} />
                    {errors.age && <p>Post content is required.</p>}




                    <div className="bg-gray-100 flex buttonWrapper gap-5 items-center pt-5 absolute left-24 bottom-0 w-full " onMouseEnter={() => { setPostTips("publishHover") }}>

                        <Button text="Publish" type="submit" variant="primary" className="font-bold" to={"/"} />


                        <Button text="Save draft" variant="transparent" />
                        <a href="">
                            <RiSettingsLine />
                        </a>
                        <Button text="Revert new changes" variant="transparent" />
                    </div>

                </form>
            </div>

        </>
    )
}


export default NewPostForm