//test1
// let contentAeras = document.getElementsByClassName("content");
// let clickable = document.getElementsByClassName('title').onclick = function HideContent() {
//     for (let i = 0; i < contentAeras.length ; i++){ 
//     let contentArea = contentAeras[i]; 
//     contentArea.classList.remove("hide");
//     }
// }

//test2
// function Accordeon(){
//     let contentAeras = document.querySelectorAll(".divSection p");
//     for(let i = 0; i < contentAeras.length ; i++){
//         let element = contentAeras[i]; 
//         element.classList.add("hide");
    
//         // if (document.getElementsByClassName('title').onclick){ 
//         //     contentAeras[i].classList.remove("hide");
//         // } else{
//         //     contentAeras[i].classList.add("hide"); 
//         // }
//     }
// }

//test3
// function Accordeon(){
//     let contents = document.getElementsByClassName("content"); 
//     let titles = document.getElementsByClassName('title');

//     for (let i = 0; i < contents.length ; i++){ //je veux mettre tout les contents en hide dès le depart
//         contents[i].classList.add("hide"); 
//     }
//     for (let i = 0; i < titles.length ; i++){ 
//         titles[i].onclick = function (){ //au click sur function
//             if (contents[i].classList.contains("hide")){ //si contents contient hide
//                 contents[i].classList.remove("hide"); //alors il l'enleve pour afficher contents
//             } else {
//                 contents[i].classList.add("hide"); //sinon il ajoute hide pour cacher le contenu
//             }
//         }
//     }
// }

//test4
function Accordion(){
    let contents = document.getElementsByClassName("content"); 
    let titles = document.getElementsByClassName("title");
    for (let i = 0; i < titles.length ; i++){ 
        titles[i].onclick = function() { //au click sur function
            if (contents[i].classList.contains("active")){ //si contents contient active
                contents[i].classList.remove("active"); //on l'enleve pour qu'il disparaisse
            } else {
                //ce for permet que dès que je clique sur un autre titre ca ferme l'autre
                for (let j = 0; j < contents.length ; j++){  
                    contents[j].classList.remove("active"); 
                }
                contents[i].classList.add("active"); //sinon il ajoute active pour afficher le contenu
            }
        }
    }
}
Accordion(); // toujours rappeler la fonction pour qu'elle fonctionne

//je veux que :
// le content soit deja hide
// je veux quand je clique sur le titre:
// que ca affiche son content
// donc ca va remove la class hide qu'il a
// mais que si il est deja remove de le add
// veut pas que ca affiche tous les contents d'un coup mais seulement un par un quand j'appui sur le titre specifique

