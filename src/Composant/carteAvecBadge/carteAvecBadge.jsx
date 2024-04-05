
import './carteBadge.css'
export const CarteAvecBadge=(even)=>{

    return(


        <div>

        <div id='cardx' class="card mt-2  ">
        <img src={even.src} class="card-img-top" alt="..."/>
        <div class="card-body">
            <p id='badge' className='danger'>-15%</p>
            <h6  id='nameProduct' className='text-danger'>{even.name}</h6>
            <p id='nameProduct' className='text-black'>{even.detaille}</p>
            <h6 id='nameProduct' className='text-black'>{even.message}</h6>
            <button id='btn_voir_plus' className='btn btn-danger'>voir +</button>


        </div>
        </div  >


        </div>
    )


}