
import './B_recherche.css'
export const BareDeRecherche=()=>{

    return(


        <div>
      <form  className="search-bar">
      <input
        type="text"
        placeholder="Recherche..." 
      />
      <button className='btn btn-warning' type="submit">Rechercher</button>
        </form>

        
        </div>
    )
}