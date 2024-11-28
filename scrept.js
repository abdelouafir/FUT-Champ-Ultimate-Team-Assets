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


window.onload = function () {
    dowlolondLesInfo();
};

function dowlolondLesInfo() {
    const storedData = localStorage.getItem('players');
    if (storedData) {
        Data = JSON.parse(storedData); 
        Data.forEach(player => {
            let position ;
            if (player.position === 'GK'){
                position = 'GK'
            }else {
                position = player.position;
            }
            addCart(position); 
    }); 
}
}
// event de ajout new jouer
buttonAddjouer.addEventListener('click', envoiyreDatatableu)
buttonAddjouer2.addEventListener('click', envoiyreDatatableu)

// function qui ajoutee les object a aryy
function envoiyreDatatableu () {
    let position = document.getElementById('position');
    if(choix == 1){
       
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
        let ratingGK = document.getElementById('ratingGK');
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
            ratingGK : ratingGK.value,
            diving : diving.value,
            handling : handling.value,
            kicking : kicking.value,
            reflexes : reflexes.value,
            speed : speedGK.value,
            positioningGK : positioningGK.value  
        })
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
    if (choix == 0){
        posion = 'GK'
    }else {
        if(position.value == 'CB'){
          posion = 'CB'
        }else if (position.value == 'LB'){
            posion = 'LB'
        }else if (position.value == 'RB'){
            posion = 'RB'
        }
    }
    localStorage.setItem('players',JSON.stringify(Data))
    addCart(posion);
}
// calcul toutal de les jouer
let toutal = 0 ;
let totalDeGk = 0 ;
let totalCB = 0 ;
let totalLB = 0 ;
let totalRB = 0 ;



function addCart (position) {
    
    if(position === 'GK') {
        let players = JSON.parse(localStorage.getItem('players'));
        console.log(players)
        // les posion de les cart 
        let GKposision = document.getElementById('GKposision');
        let bontoch = document.getElementById('bontoch');

        let newjouer = document.createElement('div')
        newjouer.innerHTML = `
         <div class="cartPerent">
            <div>
                <div class="toutal">
                    <!-- les note de jeur -->
                     <div><h3>${players[toutal].ratingGK}</h3></div>
                     <div><p>GK</p></div>
                </div>
                <div class="imagedejeue">
                     <img src="${players[toutal].photo}" alt="">
                </div>
                <div class="nomeDejer">
                     <h3> ${players[toutal].NAme}</h3>
                </div>
                <div class="pawordeJeur">
                    <div>
                        <div>DIV</div>
                        <div>${players[toutal].diving}</div>
                    </div>
                    <div>
                        <div>HAN</div>
                        <div>${players[toutal].handling}</div>
                    </div>
                    <div>
                        <div>KIC</div>
                        <div>${players[toutal].kicking}</div>
                    </div>
                    <div>
                        <div>REF</div>
                        <div>${players[toutal].reflexes}</div>
                    </div>
                    <div>
                        <div>SPE</div>
                        <div>${players[toutal].speed}</div>
                    </div>
                    <div>
                        <div>POS</div>
                        <div>${players[toutal].positioningGK}</div>
                    </div>
                </div>
                <div class="footerDecart">
                    <!-- footer de cart  -->
                    <div><img src="${players[toutal].flag}" alt=""></div>
                    <div><img src="${players[toutal].logo}" alt=""></div>
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
       toutal++;

        
    }else if(position === 'CB') {
        // les posion de les cart 
        let CBposision1 = document.getElementById('CBposision1');
        let CBposision2 = document.getElementById('CBposision2');

        let bontoch2 = document.getElementById('bontoch2');
        let bontoch3 = document.getElementById('bontoch3');

        

        let newjouer = document.createElement('div')
        newjouer.innerHTML = `
         <div class="cartPerent">
            <div>
                <div class="toutal">
                    <!-- les note de jeur -->
                     <div><h3>${Data[toutal].rating}</h3></div>
                     <div><p>${Data[toutal].position}</p></div>
                </div>
                <div class="imagedejeue">
                     <img src="${Data[toutal].photo}" alt="">
                </div>
                <div class="nomeDejer">
                     <h3> ${Data[toutal].NAme}</h3>
                </div>
                <div class="pawordeJeur">
                    <div>
                        <div>pac</div>
                        <div>${Data[toutal].pace}</div>
                    </div>
                    <div>
                        <div>sho</div>
                        <div>${Data[toutal].shooting}</div>
                    </div>
                    <div>
                        <div>pas</div>
                        <div>${Data[toutal].position}</div>
                    </div>
                    <div>
                        <div>dri</div>
                        <div>${Data[toutal].dribbling}</div>
                    </div>
                    <div>
                        <div>def</div>
                        <div>${Data[toutal].defending}</div>
                    </div>
                    <div>
                        <div>phy</div>
                        <div>${Data[toutal].physical}</div>
                    </div>
                </div>
                <div class="footerDecart">
                    <!-- footer de cart  -->
                    <div><img src="${Data[toutal].flag}" alt=""></div>
                    <div><img src="${Data[toutal].logo}" alt=""></div>
                </div>
            </div>
        </div>
        `
        if(totalCB == 0) {
            CBposision1.classList.remove('bgrimove')
            CBposision1.appendChild(newjouer);
        }else if (totalCB == 1) {
            CBposision2.classList.remove('bgrimove')
            CBposision2.appendChild(newjouer);
        }else if (totalCB == 2){
            bontoch2.classList.remove('bgrimove')
            bontoch2.appendChild(newjouer);
        }else if (totalCB == 3){
            bontoch3.classList.remove('bgrimove')
            bontoch3.appendChild(newjouer);
        }
       // toutal de golKeeper moddffid    
       totalCB++ ;
       toutal++ ;
    }else if(position === 'LB') {
        // les posion de les cart 
        let LBbosision = document.getElementById('LBbosision');

        let bontoch4 = document.getElementById('bontoch4');

        let newjouer = document.createElement('div')
        newjouer.innerHTML = `
         <div class="cartPerent">
            <div>
                <div class="toutal">
                    <!-- les note de jeur -->
                     <div><h3>${Data[toutal].rating}</h3></div>
                     <div><p>${Data[toutal].position}</p></div>
                </div>
                <div class="imagedejeue">
                     <img src="${Data[toutal].photo}" alt="">
                </div>
                <div class="nomeDejer">
                     <h3> ${Data[toutal].NAme}</h3>
                </div>
                <div class="pawordeJeur">
                    <div>
                        <div>pac</div>
                        <div>${Data[toutal].pace}</div>
                    </div>
                    <div>
                        <div>sho</div>
                        <div>${Data[toutal].shooting}</div>
                    </div>
                    <div>
                        <div>pas</div>
                        <div>${Data[toutal].position}</div>
                    </div>
                    <div>
                        <div>dri</div>
                        <div>${Data[toutal].dribbling}</div>
                    </div>
                    <div>
                        <div>def</div>
                        <div>${Data[toutal].defending}</div>
                    </div>
                    <div>
                        <div>phy</div>
                        <div>${Data[toutal].physical}</div>
                    </div>
                </div>
                <div class="footerDecart">
                    <!-- footer de cart  -->
                    <div><img src="${Data[toutal].flag}" alt=""></div>
                    <div><img src="${Data[toutal].logo}" alt=""></div>
                </div>
            </div>
        </div>
        `
        if(totalLB == 0) {
            LBbosision.classList.remove('bgrimove')
            LBbosision.appendChild(newjouer);
        }else{
            bontoch4.classList.remove('bgrimove');
            bontoch4.appendChild(newjouer);

        }
        alert('hello')
       // toutal de golKeeper moddffid    
       totalLB++;
       toutal++ ;
    }
    else if(position === 'RB') {
        // les posion de les cart 
        let RBbosision = document.getElementById('RBbosision');

        let bontoch4 = document.getElementById('bontoch4');

        let newjouer = document.createElement('div')
        newjouer.innerHTML = `
         <div class="cartPerent">
            <div>
                <div class="toutal">
                    <!-- les note de jeur -->
                     <div><h3>${Data[toutal].rating}</h3></div>
                     <div><p>${Data[toutal].position}</p></div>
                </div>
                <div class="imagedejeue">
                     <img src="${Data[toutal].photo}" alt="">
                </div>
                <div class="nomeDejer">
                     <h3> ${Data[toutal].NAme}</h3>
                </div>
                <div class="pawordeJeur">
                    <div>
                        <div>pac</div>
                        <div>${Data[toutal].pace}</div>
                    </div>
                    <div>
                        <div>sho</div>
                        <div>${Data[toutal].shooting}</div>
                    </div>
                    <div>
                        <div>pas</div>
                        <div>${Data[toutal].position}</div>
                    </div>
                    <div>
                        <div>dri</div>
                        <div>${Data[toutal].dribbling}</div>
                    </div>
                    <div>
                        <div>def</div>
                        <div>${Data[toutal].defending}</div>
                    </div>
                    <div>
                        <div>phy</div>
                        <div>${Data[toutal].physical}</div>
                    </div>
                </div>
                <div class="footerDecart">
                    <!-- footer de cart  -->
                    <div><img src="${Data[toutal].flag}" alt=""></div>
                    <div><img src="${Data[toutal].logo}" alt=""></div>
                </div>
            </div>
        </div>
        `
        if(totalRB == 0) {
            RBbosision.classList.remove('bgrimove')
            RBbosision.appendChild(newjouer);
        }else{
            bontoch4.classList.remove('bgrimove');
            bontoch4.appendChild(newjouer);

        }
        alert('hello')
       // toutal de golKeeper moddffid    
       totalRB++;
       toutal++ ;
    }
    console.log(Data)
}








