const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE = 'http://api.themoviedb.org/3';

/*
originais
recomendados
acao
romance
*/
const basicFetch =async (endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug:'originals',
                title:'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug:'trending',
                title:'Recomendado para Você',
                items: await basicFetch(`/trending/all/week?language=pt-Br&api_key=${API_KEY}`)

            },
            {
                slug:'toprading',
                title:'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-Br&api_key=${API_KEY}`)

            },
            {
                slug:'action',
                title:'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-Br&api_key=${API_KEY}`)

            },
            {
                slug:'comedy',
                title:'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-Br&api_key=${API_KEY}`)

            },
            {
                slug:'horror',
                title:'Terror',
                items:await basicFetch(`/discover/movie?with_genres=27&language=pt-Br&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Romance',
                items:await basicFetch(`/discover/movie?with_genres=10749&language=pt-Br&api_key=${API_KEY}`)

            },
            {
                slug:'documentary',
                title:'Documentarios',
                items:await basicFetch(`/discover/movie?with_genres=99&language=pt-Br&api_key=${API_KEY}`)
            },
        ]
    },// função para pegar informaçao de um filmes especifico

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                    case 'tv':
                        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                    default:
                        info = null;
                        break;
            }
        }
        return info;
    }

}