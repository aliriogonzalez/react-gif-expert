export const getGif = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GUZ0YNrGigAUrKtYfFJ5gFBpD5lTWknp&q=${ category }&limit=10`
    const result = await fetch(url);
    const { data } = await result.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
   
    return gifs;
}