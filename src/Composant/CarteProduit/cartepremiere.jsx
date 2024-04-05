
import './cartePremiere.css'
export const CartPremiere =(even)=>{




    return(

        <div class="card mt-2">
        <img src={even.src} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h6 id='nameProduct' className='text-black'>{even.name}</h6>
        </div>
        </div>

    )
}