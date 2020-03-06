import React,{useState} from'react';
import {Link} from 'react-router-dom'
export const Card = (props) => {
 const [Pelis] = useState(props.Peliculas);
 
 return Pelis.map((data,index) => (
    <div key={index} className="centercard card d-inline-block col-md-5" >
    <img className="imagen card-img-top" src={data.Poster} alt="Card image cap"/>
    <div className="card-body">
     <h5 className="card-title">{data.Title}</h5>
      <p className="card-text"> Year {data.Year} - Type {data.Type} </p>
      <Link to={`/info/${data.imdbID}`} className="btn btn-info"> Ver más </Link>
    </div>
  </div>
 ))
}