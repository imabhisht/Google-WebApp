import PaginationButtons from "./PaginationButtons";


    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-md mb-5 mt-3">
                About {results.searchInformation?.formattedTotalResults} results ({
               results.searchInformation?.formattedSearchTime} seconds)
            </p>
                    
            {results.items?.map((result)=> (
                <div key={result.link}
                className="max-w-xl mb-8 ">
                    
                    <div className="group line-clamp-1 text-sm text-gray-900"> 
                        <a href={result.link}
                        className="text-sml">
                            {result.formattedUrl}
                        </a>

                        <a href={result.link}>
                            <h2 className="truncate mt-1  text-blue-800 text-xl group-hover:underline">
                            {result.title}
                            </h2>
                        </a>

                    </div>

                    <p className="line-clamp-2 font-sans mt-1 text-base text-gray-700">{result.snippet}</p>

                </div>
            ))}
            <PaginationButtons />
        </div>  
    );
}

export default SearchResults
