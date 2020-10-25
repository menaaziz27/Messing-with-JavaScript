// Global app controller
global._babelPolyfill = false;
import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    try {

        const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${query}`)
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('green bean');

// https://forkify-api.herokuapp.com/api/search
// https://forkify-api.herokuapp.com/api/get