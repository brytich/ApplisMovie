import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getMovieSave() {
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JASON.parse(myMovies) || [];
    return moviesSave;
}

 export async function saveMovie(key, newMovie) {
    let moviesStored = await getMovieSave(key, newMovie)

    const hasMovie = moviesStored.some(item => item?.id === newMovie?.id)

    if (hasMovie) {
        console.log('ja existe')
        return
    } else {
        moviesStored.push(newMovie)

        await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
        console.log('filme salvo com sucesso')
        return
    }


} 
