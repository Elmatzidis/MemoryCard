import "../styles/cards.css"

// This displays each card with the proper information
export function Card({id, name , image , onClickCard}){
    return(
        <div className="card" onClick={()=>onClickCard(id)}>
            <img src={image} alt="Image of pokemom"/>
            <p className="pokemonName">{name}</p>
        </div>
    )
}