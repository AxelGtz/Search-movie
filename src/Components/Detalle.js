import React, { Fragment, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
export const Detalle = (props) => {

    const { id } = props.match.params;
    let history = useHistory();
    const [Pelicula, SetPelicula] = useState({ Peli: {} });
    const [Loading, SetLoding] = useState(true);

    useEffect(() => {
        DetallePeli()
    },[]);

    const DetallePeli = async () => {
        const Data = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=33914e08`);
        const Peli = await Data.json();
        SetPelicula({ Peli });
        SetLoding(false);
    }

    if (Loading) {
        return (
            <h3 className="text-center"> Loading...</h3>
        )
    } else {
        return (
        <Fragment>
            <div className="container d-inline-flex mt-5">
                <img className="poster" src={Pelicula.Peli.Poster} />
                <h3 className="tituloDetalle text-primary"> {Pelicula.Peli.Title} </h3>

                <div className="informacion">
                    <p> {Pelicula.Peli.Plot} </p>
                    <div> <span className="text-warning"> Year </span> : {Pelicula.Peli.Year} <br />
                        <span className="text-warning" > Director </span> : {Pelicula.Peli.Director} <br />
                        <span className="text-warning"> Language </span> : {Pelicula.Peli.Language} <br />
                        <span className="text-warning" > Genero </span> : {Pelicula.Peli.Genre} <br />
                        <span className="text-warning"> Awards  </span> : {Pelicula.Peli.Awards} <br />
                        <span className="text-warning"> Actors  </span> : {Pelicula.Peli.Actors}  <br />
                        <span className="text-warning"> Country </span> : {Pelicula.Peli.Country}

                    </div>
                </div>
            </div>
             <button className="boton-back btn btn-outline-success" onClick={()=> history.goBack()}> Volver...</button>
             </Fragment>
        )
    }
} 