import React, {useEffect, useState}from 'react';

import Tmdb from './tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FeaturedMovir from './components/FeaturedMovie';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {
    
    const[movieList, setMovieList] = useState([]);
    const[featuredData, setFeaturedData] = useState(null);

 useEffect(()=>{
     const loadAll = async () =>{
          //pegando a lista total de filmes
     let list = await Tmdb.getHomeList();
    setMovieList(list);

    // pegando o feature em destaque
    let originals = list.filter(i=>i.slug === 'originals');
    //gerando um filme aleatorio de todos os originais
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    // pegando o filme escolhido
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo= await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);


     }

     loadAll();
        
 },[]);

return(
    <div className='pages'>
        <Header/>
        {featuredData && 
        <FeaturedMovie item={featuredData}
        />}

        <section className='list'>
        {movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}

        </section>
        <footer>
            <span>Direitos de imagem para Netflix</span>
        </footer>


    </div>
);

}
