// les buton de choix (choix et afficher form)
const BtnChoixJoueur = document.getElementById('btn-choix-joueur');
const btnChoixGolkepper = document.getElementById('btn-choix-golkepper');
// les form 
let formContenerChoix = document.querySelector('#formContenerChoix');
let formContenerJoueur = document.querySelector('#formContenerJoueur');
let formContenerGK = document.querySelector('#formContenerGK');
// Démonttrez  form jouer milue
let choix ;
BtnChoixJoueur.addEventListener('click',() => {
    formContenerJoueur.classList.remove('heddin')
    formContenerGK.classList.add('heddin')
    choix = 1

})
btnChoixGolkepper.addEventListener('click', () => {
    formContenerJoueur.classList.add('heddin')
    formContenerGK.classList.remove('heddin')
    choix = 0 ;
})


// ajoute jouer a tiran
let buttonAddjouer = document.getElementById('buttonAddjouer');
let buttonAddjouer2 = document.getElementById('buttonAddjouer2');
let Data = [] ;
// event de ajout new jouer
buttonAddjouer.addEventListener('click', envoiyreDatatableu)
buttonAddjouer2.addEventListener('click', envoiyreDatatableu)

// function qui ajoutee les object a aryy
function envoiyreDatatableu () {
    let possion ;
    // variable de les form 
    if(choix == 1){
        let position = document.getElementById('position');
        let NAme = document.getElementById('NAme');
        let photo = document.getElementById('photo');
        let flag = document.getElementById('flag');
        let club = document.getElementById('club');
        let logo = document.getElementById('logo');
        let rating = document.getElementById('rating');
        let pace = document.getElementById('pace');
        let shooting = document.getElementById('shooting');
        let passing = document.getElementById('passing');
        let dribbling = document.getElementById('dribbling');
        let physical = document.getElementById('physical');
        let defending = document.getElementById('defending');
        let info ;
        possion = position.value ;
        Data.push(info = {
            position : position.value,
            NAme : NAme.value,
            photo : photo.value,
            flag : flag.value,
            club : club.value,
            logo : logo.value,
            rating : rating.value,
            pace : pace.value,
            shooting : shooting.value,
            passing : passing.value,
            dribbling : dribbling.value,
            defending : defending.value,
            physical : physical.value  
        })
        position.value = '' ;
        NAme.value = '' ;
        photo.value = '' ;
        flag.value = '' ;
        club.value = '' ;
        logo.value = '' ;
        rating.value = '' ;
        pace.value = '' ;
        shooting.value = '' ;
        passing.value = '' ;
        dribbling.value = '' ;
        defending.value = '' ;
        physical.value  = '' ;
       
    }else{
        let positionGK = document.getElementById('positionGK');
        let NAme = document.getElementById('NAmeGK');
        let photo = document.getElementById('photoGK');
        let flag = document.getElementById('flagGK');
        let club = document.getElementById('clubGK');
        let logo = document.getElementById('logoGK');
        let rating = document.getElementById('ratingGK');
        let diving = document.getElementById('divingGK');
        let handling = document.getElementById('handlingGK');
        let kicking = document.getElementById('kickingGK');
        let reflexes = document.getElementById('reflexesGK');
        let speedGK = document.getElementById('speedGK');
        let positioningGK = document.getElementById('positioningGK');
    
        let info ;
        Data.push(info = {
            position : positionGK.value,
            NAme : NAme.value,
            photo : photo.value,
            flag : flag.value,
            club : club.value,
            logo : logo.value,
            rating : rating.value,
            diving : diving.value,
            handling : handling.value,
            kicking : kicking.value,
            reflexes : reflexes.value,
            speed : speedGK.value,
            positioningGK : positioningGK.value  
        })
        positionGK.value = '';
        NAme.value = '';
        photo.value = '';
        flag.value = '';
        club.value = '';
        logo.value = '';
        rating.value = '';
        diving.value = '';
        handling.value = '';
        kicking.value = '';
        reflexes.value = '';
        speedGK.value = '';
        positioningGK.value  = '';
    }   
    let posion  ;
    if (choix != 1){
        posion = 'GK'
    }
    addCart(posion);
}
// les posion de les cart 
let GKposision = document.getElementById('GKposision');
let bontoch = document.getElementById('bontoch');
let totalDeGk = 0 ;


function addCart (position) {
    if(position === 'GK') {
        let newjouer = document.createElement('div')
        newjouer.innerHTML = `
         <div class="cartPerent">
            <div>
                <div class="toutal">
                    <!-- les note de jeur -->
                     <div><h3>${Data[totalDeGk].positionGK}</h3></div>
                     <div><p>GK</p></div>
                </div>
                <div class="imagedejeue">
                     <img src="/src/assets/img/p67340611.png" alt="">
                </div>
                <div class="nomeDejer">
                     <h3> ${Data[totalDeGk].NAme}</h3>
                </div>
                <div class="pawordeJeur">
                    <div>
                        <div>pac</div>
                        <div>${Data[totalDeGk].rating}</div>
                    </div>
                    <div>
                        <div>sho</div>
                        <div>${Data[totalDeGk].diving}</div>
                    </div>
                    <div>
                        <div>pas</div>
                        <div>${Data[totalDeGk].handling}</div>
                    </div>
                    <div>
                        <div>dri</div>
                        <div>${Data[totalDeGk].kicking}</div>
                    </div>
                    <div>
                        <div>def</div>
                        <div>${Data[totalDeGk].reflexes}</div>
                    </div>
                    <div>
                        <div>phy</div>
                        <div>${Data[totalDeGk].positionGK}</div>
                    </div>
                </div>
                <div class="footerDecart">
                    <!-- footer de cart  -->
                    <div><img src="/src/assets/img/france.png" alt=""></div>
                    <div><img src="/src/assets/img/Rial madrid.png" alt=""></div>
                </div>
            </div>
        </div>
        `
        if(totalDeGk == 0) {
            GKposision.classList.remove('bgrimove')
            GKposision.appendChild(newjouer);
        }else if (totalDeGk == 1) {
            bontoch.classList.remove('bgrimove')
            bontoch.appendChild(newjouer);
        }
       // toutal de golKeeper moddffid    
        totalDeGk++ ;
        
    }
}


