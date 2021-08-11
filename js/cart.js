let cartitem=[{itemno:1,products:"pedigriee",price:"2000"}]
let contect="";

for(let item of cartitem){
    content+=`<tr> <td>${item.itemno}</td>
    <td>${item.products}</td>
    <td>${item.price}</td>
    <td></td>
  </tr> `
}

document.querySelector(".table").innerHTML=content;