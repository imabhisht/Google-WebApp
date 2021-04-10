function Avatar({url,className}) {

    function imageOnClick(){
        window.open("https://www.github.com/imabhisht", '_blank').focus();
    }
    return (
        <img 
            className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110
            ${className}`}
            loading="lazy"
            alt="profile pic"
            src={url}
            onClick={imageOnClick}
        />
    )
}

export default Avatar
