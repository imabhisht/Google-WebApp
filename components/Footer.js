import { GlobeIcon } from '@heroicons/react/solid';
import Head from 'next/head'
function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 
        bg-gray-100 text-sm text-gray-500">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Overpass+Mono:wght@300&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="px-8 py-3">
                <p>India</p>   
            </div>  
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-y-4
            px-8 py-3 grid-flow-row-dense'>
                <div className='flex justify-center items-center md:col-span-2
                lg:col-span-1 lg:col-start-2 font-mono'> {"Developed with ❤️ by Abhisht"}
                </div>
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search Work</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
