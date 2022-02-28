import axios from 'axios';


export const key = 'e5f25f5d7084683d80504b58889f704e'
//Lien de L API externe complete , ESP trouvé seulement
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;
