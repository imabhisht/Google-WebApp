import { XIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import {useRouter} from "next/router"
import { useRef , useState } from 'react'
import Avatar from "./Avatar";
import {AvatarImageURL , GoogleImageURL} from '../constants/urlFile';
import HeaderOptions from "./HeaderOptions";


function Header() {
    const [searchInput, setSearchInput] = useState("")
    const router = useRouter();
    const searchInputRef = useRef(null);
    const previousTerm = router.query.term

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term)return;
        router.push(`/search?term=${term}`)
    }
    

    return (
        <header className={"sticky top-0 bg-white"}>   
            <div className="flex w-full p-6 items-center">
                <Image
                        src={GoogleImageURL}
                        height={35}
                        width={100}
                        className="cursor-pointer"
                        onClick={() => router.push('/')}
                    />
                    <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full
                    shadow-lg max-w-2xl items-center">

                        <input ref={searchInputRef} defaultValue={previousTerm} className="flex-grow w-full focus:outline-none" type="text"/>
                        <XIcon className="h-6 sm:mr-3 text-gray-500 cursor-pointer 
                        transition duration-500 transfrom hover:scale-125" 
                        onClick={() => (searchInputRef.current.value="")}
                        /> 
                        
                        <MicrophoneIcon className="h-5 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4
                        border-gray-300"/>
                        <SearchIcon className="h-5 text-blue-500 hidden sm:inline-flex"/>
                        <button hidden type="submit" onClick={search}>Search</button>
                    </form>
                    <Avatar className={"ml-auto"}url={AvatarImageURL} />
            </div>    

        <HeaderOptions />
        </header>
    )
}

export default Header
