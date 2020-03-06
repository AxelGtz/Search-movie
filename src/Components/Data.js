import React,{useState} from 'react';
import {Card} from './Card';

export const Data = () => {
   const [Movies, setPeliculas ] = useState ([]);
  const [Busqueda, setBusqueda ] = useState ({Search:''});
  const [Status, setStatus] = useState ({status : ''})
  const Data = Movies.Peliculas;


  const CambiarState = (e) => {
    const search = e.target.value;
    setBusqueda({Search : search});
  }

  const TraerDatos = async (e) => {
    e.preventDefault();
    const Datos = await fetch(`http://www.omdbapi.com/?apikey=33914e08&s=${Busqueda.Search}`);
    const Data = await Datos.json();
    const Peliculas = Data.Search;
    setPeliculas({ Peliculas });
    if(Peliculas === undefined) return setStatus ({status : 'error'}) 
    else return setStatus ({status : 'success'})
   }

   const LimpiarState = () =>{
    
        setBusqueda({
            ...Busqueda
          })

          setPeliculas({
              ...Data
          })
    }

  return (
    <div className="container">
      <form onSubmit={TraerDatos} className="formulario form-inline my-2 my-lg-0 justify-content-center">
      <input className="Input-txt form-control col-md-6 mr-sm-2" onChange={CambiarState} type="search" placeholder="Search movies or series..." aria-label="Search"/>
      <button className="Input-btn btn btn-outline-info my-2 my-sm-0" onClick={LimpiarState} type="submit">Search </button>
      </form>
    
      {(Status.status === "error") ? <h3 className="text-center"> Sin resultados...</h3> : null }
      <div>  {(Data) ? <Card Peliculas= {Data}/> : null } </div>
   </div>
  );
}