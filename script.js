let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let male = document.getElementById("m");
let female = document.getElementById("f");
let form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Data harus di isi`;

  }else{
    countBmi();
  }

}


function countBmi(){
  const p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  let bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  let result = '';
  if(bmi<18.5){
    result = 'Berat badan mu tidak normal';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Berat badan mu Normal';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kamu gemuk';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'kamu obesitas perbanyak olahraga';
     }else if(35<=bmi){
    result = 'Kamu obesitas perbanyak olahraga dan kurangi konsumsi berlebihan';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `${result}`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// modal
span.onclick = function() {
  modal.style.display = "none";
}

// menghilangkan tampiilan modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
