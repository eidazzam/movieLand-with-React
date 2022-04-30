import React from 'react'

const Cardmovie = ({movie: {imdbID, Year, Poster,Title, Type} }) => {

  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img src={Poster !=="N/A" ?Poster : "https://via.placeholder.com/400"} alt={Title} />  {/* if poster is not available then use placeholder image */}
        </div>
      <div>
        <span>
          {Type}
        </span>
        <h3>{Title}</h3>
      </div>
    </div>
  )
}

export default Cardmovie
