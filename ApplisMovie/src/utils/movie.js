
// génère une liste de films //
export function getListMovies(size, movies){
    let popularMovies = []

    for(let i = 0, l = size; i < l; i++){
        popularMovies.push(movies[i])
    }
    return popularMovies;
}

// génère un nombre aléatoire basé sur la liste de films //


export function randomBanner(movies){
    return Math.floor(Math.random() * movies.length)
}