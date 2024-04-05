
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ImangeBackgroung } from '../imagePresentation/imageBaground';
import { Slider } from '../sliderOne/sliderone';
import { Catalogue } from '../carteCatalogue/catalogue';
import { CartPremiere } from '../CarteProduit/cartepremiere';
import { BandeInfoMenu } from '../BandeMenu/bandeMenu';
import { Footer } from '../footer/footer';
import { BandeInfo } from '../bandeInfo/bandeInfo';
import { ProduitReduction } from '../cartebadgepersonalier/badgePersonaliser';
import { CarteAvecBadge } from '../carteAvecBadge/carteAvecBadge';
import './home.css'
import { CartProduitComplet } from '../cardeProduitComplet/carteProduitComplet';
import { TextProduit } from '../texteTopProduit/topproduit';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Titre } from '../titre_du_app/titre';
import { BareDeRecherche } from '../Bare_de_Recherche/bareDeRecherche';
export const Home=()=>{


    const list1 =    [

        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>,
        <CartPremiere src="image/chaussure.png" name="nike"></CartPremiere>




                    ]

    const list_broduit_badge=[
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,
        <ProduitReduction  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide"  ></ProduitReduction>,



    ]

    const images = [
                        'image/chaussure.png',
                        'image/shoopingBackground.jpg',
                        
                        // Add more images here
                    ];
    const list =[

        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>,
        <CartProduitComplet src="image/chaussure.png" name="nike"  ></CartProduitComplet>

                    ]
  


    return(

      <div>

<div className='centrale'>

<div  className='container mt-2'>
    <div id='hautepagemenuettitre' className='row md-12'>

        <div className='col-4'>
         <Titre></Titre>
        </div>
      
        <div id='Contenair_bare_recherche' className='col-8'>
        <BareDeRecherche></BareDeRecherche>
        </div>


    </div>

    
</div>

<div className='container-fluid'>
<ImangeBackgroung></ImangeBackgroung>
</div>

<div>
{/* <Catalogue></Catalogue> */}
</div>

<div >

 <TextProduit texteAaafficher="Top Des Produit"></TextProduit>
</div>

<div className='d-flex container'>


<ul className='overflow-y-auto p-3 d-flex'>

        {

        list1.map((item)=>(

        <li id='listpuce' className='px-2 py-1 p-5'>

        {item}

        </li>

        ))

        }
</ul>


</div  >
<div>

    
        <BandeInfo text="Cadeau Special"></BandeInfo>
    
</div>


<div className='container'>

    <div id='block_carte_avec_bad' className='row'>

        <div className='col-4'>
            
        <CarteAvecBadge  src="image/chaussure.png" name="nike de classe" detaille="30 A 45 dispoible" message="livraison ultra rapide" ></CarteAvecBadge>

        </div> 

        <div id='blocksideproduit' className='col-8 d-flex'>
        <ul className='overflow-y-auto p-3 d-flex'>

        {

        list_broduit_badge.map((item)=>(

        <li id='listpuce' className='px-2 py-1 p-5'>

        {item}

        </li>

        ))

        }
        </ul>


        </div>


        
    </div>



</div>

<div className='container'>
    
    <BandeInfoMenu></BandeInfoMenu>
  
</div>



<div className='container'>

<Slider images={images} />
</div>

<div className='mt-2'>

    <BandeInfo text="Vetement de Classes"></BandeInfo>
</div>

<div className='d-flex mt-2'>

<ul className='overflow-y-auto p-3 d-flex'>

        {

        list.map((item)=>(

        <li id='listpuce' className='px-2 py-1 p-5'>

        {item}

        </li>

        ))

        }
</ul>


</div>
<div className='mt-2'>

    <BandeInfo text="Chaussures et Montre  de Classes"></BandeInfo>
</div>

<div className='d-flex mt-2'>

<ul className='overflow-y-auto p-3 d-flex'>

        {

        list.map((item)=>(

        <li id='listpuce' className='px-2 py-1 p-5'>

        {item}

        </li>

        ))

        }
</ul>


</div>

<div className='mt-2'>

    <BandeInfo text="Telephones Originals"></BandeInfo>
</div>

<div className='d-flex mt-2'>

<ul className='overflow-y-auto p-3 d-flex'>

        {

        list.map((item)=>(

        <li id='listpuce' className='px-2 py-1 p-5'>

        {item}

        </li>

        ))

        }
</ul>


</div>

<div className='mt-2'>

    <BandeInfo text="Top Pepignere Piment poivron..."></BandeInfo>
</div>

<div className='d-flex mt-2'>

<ul className='overflow-y-auto p-3 d-flex'>

        {

        list.map((item)=>(

        <li id='listpuce' className='px-2 py-1 p-5'>

        {item}

        </li>

        ))

        }
</ul>


</div>



<div>

    <Footer></Footer>
</div>

{/* ici c la dive de fin  */}
</div>
      </div>
    )
}