//Regresa una promesa a traves del resolve con la coleccion de imagenes
export const getGifts = async(category) =>{
    const token ='TW1PjTxKqMxpqaEpMniiiK8GyoNS7P3e';

    //encodeURI permite reemplazar los espacios por %20
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${token}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url 
        }
    });

    // console.log(gifs);
    return gifs;
}