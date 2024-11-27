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
buttonAddjouer.addEventListener('click', setdata)
buttonAddjouer2.addEventListener('click', setdata)

// function qui ajoutee les object a aryy
function envoiyreDatatableu () {
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
        let info = {}
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
    
        let info = {}
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
}


