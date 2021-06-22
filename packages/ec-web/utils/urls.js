export const API_URL = process.env.NEX_PIBLIC_API_URL || 'http://localhost:1337';


/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {any} image 
 */
export const fromImageToURL = (image) => {
    if(!image){
        return "/vercel.svg"
    }
    // If '/' is a first character => That means relative path
    if(image.url.indexOf("/") === 0){
        
        return `${API_URL}${image.url}`
 
    }
    return image.url;
}