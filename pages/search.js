import Head from "next/head";
import Header from "../components/Header";

import Response from "../Response2"
import {useRouter} from "next/router"
import SearchResults from "../components/SearchResults";
import {db} from '../firebase'
function Search({results}) {
    
    const router = useRouter();
    console.clear();
    console.log("Oh, Hello my Curious Friend!\n\nThanks for testing my Build.\n\nI have used Google API's to fetch data and done Sever-Side Rendering of those data. Here is the Example Output of the Data you just Fetched: \n\n",
    results,"\n\nHappy Hunting!! 😉\n\n~ Abhisht\nhttp://github.com/imabhisht");

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" />            </Head>

            <Header />

            <SearchResults results={results}/>


        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const API_KEY = await db.collection('Keys').doc('Currently').get()
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY.data().API_KEY}&cx=${API_KEY,API_KEY.data().CONTEXT}&q=${context.query.term}&start=${startIndex}`)
    .then(response => response.json());

    //AFTER SERVER RENDERED
    return{
        props:{
            results: data
        }
    }
}

 
