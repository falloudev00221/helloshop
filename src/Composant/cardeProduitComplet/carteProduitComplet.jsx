
import './cartePremiere2.css'
export const CartProduitComplet =(even)=>{




    return(

        <div class="card mt-2">
        <img src={even.src} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h6 id='nameProduct' className='text-black'>{even.name}</h6>
        </div>
        <button className='btn btn-warning'>Voir ++</button>
        </div>

    )
}