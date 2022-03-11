import React from 'react'

const API_IMG=`https://image.tmdb.org/t/p/w1280`


function Movie({id,title,release_date,vote_average,overview,poster_path}) {

  return (
    <>

<div className="card mb-6 box">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={API_IMG+poster_path} className="img" alt={id}/>
    </div>
    <div className="col-md-8 flexbody">
      <div className="card-body">
        <h5 className="card-title title">{title}</h5>
        <p className="card-text"><small className="text-muted">RELEASE DATE: {release_date}</small></p>
        <p className="card-text"><small className="text-muted">RATING: {vote_average}</small></p>
      
        <p className="card-text">{overview}</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Movie



