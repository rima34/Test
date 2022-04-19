let etudiants = [];
let Valide;

function afficherEtudiant(){
  let tbody = document.querySelector("tbody");
  let newHTML = "";
  
  for(let i=0; i < etudiants.length; i++){
    newHTML += "<tr>";
    newHTML += "<th scope='row'>" + etudiants[i].nom +" " + etudiants[i].prénom + "</th>";
    newHTML += "<td>" + etudiants[i].email + "</td>";
    newHTML += "<td>" + (parseFloat(etudiants[i].note1)+ parseFloat(etudiants[i].note2) + parseFloat(etudiants[i].note3))/3+ "</td>";    
    newHTML += "<td>" + "<a onClick='afficherDetails("+i+")'><img src = '+'TEST/detail.jpg'+'id=det'></a>" + "</td>";
    newHTML += "<td>" + "<a onClick='supprimer("+i+")'><img src = '+'TEST/supp.jpg'+'id=supp'></a>" +"</td>";
    newHTML += "</tr>";
  }
  tbody.innerHTML = newHTML;
}


function ajouterEtudiant(){
  const nomEtudiant = document.getElementById("nom").value;
  const prénomEtudiant = document.getElementById("prénom").value;
  const emailEtudiant = document.getElementById("email").value;
  const classe = document.getElementById("classe").value;
  const note1Etudiant = document.getElementById("note1").value;
  const note2Etudiant = document.getElementById("note2").value;
  const note3Etudiant = document.getElementById("note3").value;

  const newEtudiant = new Etudiant (nomEtudiant, prénomEtudiant, emailEtudiant,classe, note1Etudiant,note2Etudiant,note3Etudiant);
  etudiants.push(newEtudiant);
  afficherEtudiant();

}


function init(){
  etudiants = [
    new Etudiant("Abdi","Amine","abdi@gmail.com","L2",12,13,12),
    new Etudiant("Benkilani","Rim","Benki@gmail.com","L2",14,14,14)
  ];
  Valide = document.getElementById("Valide");
  Valide.addEventListener("click", ajouterEtudiant)

}

function afficherDetails(x)
{
  let e=etudiants[x];
  let nom= e.nom;
  let prénom= e.prénom;
  let email= e.email;
  let classe= e.classe;
  let note1=parseFloat(e.note1);
  let note2=parseFloat(e.note2);
  let note3=parseFloat(e.note3);
  let moyenne=(note1+note2+note3)/3;
  let details="Nom: "+nom+"\n"
              +"Prénom: "+prénom+"\n"
              +"Email: "+email+"\n"
              +"Classe:"+classe+"\n"
              +"Les notes: "+note1+", "+note2+", "+note3+"\n"
              +"Moyenne: "+moyenne;

alert(details);

}

function supprimer(x){

  etudiants.splice(x,1);
  if(etudiants.length==x){
   document.getElementById('tab').deleteRow(0);
  }
  else
  {
  document.getElementById('tab').deleteRow(x);
  }
   console.log(x);
}



function main(){
  init();
  afficherEtudiant();
}

window.addEventListener("load", main); 
