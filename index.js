//test1
// let contentAeras = document.getElementsByClassName("content");
// let clickable = document.getElementsByClassName('title').onclick = function HideContent() {
//     for (let i = 0; i < contentAeras.length ; i++){ 
//     let contentArea = contentAeras[i]; 
//     contentArea.classList.remove("hide");
//     }
// }

//test2
// function DisplayContent(){
//     let contentAeras = document.querySelectorAll(".divSection p");
//     for(let i = 0; i < contentAeras.length ; i++){
//         let element = contentAeras[i]; 
//         element.classList.add("hide"); //ajoute la class hidden déjà créé dans le css aux elements du tableau de la class spoiler
    
//         // if (document.getElementsByClassName('title').onclick){ 
//         //     contentAeras[i].classList.remove("hide");
//         // } else{
//         //     contentAeras[i].classList.add("hide"); 
//         // }
//     }
// }

//test3
var contents = document.getElementsByClassName("content");
var titles = document.getElementsByClassName('title');

for (let i = 0; i < contents.length ; i++){
    contents[i].classList.add("hide"); 
}
for (let i = 0; i < titles.length ; i++){
    titles[i].onclick = function (){
        if (contents[i].classList.contains("hide")) {
            contents[i].classList.remove("hide");
        } else {
            contents[i].classList.add("hide");
        }
    }
}

// le content est deja hide
// je veux quand je clique sur le titre
//  que ca affiche son content
// donc ca va remove la class hide qu'il a
// 

