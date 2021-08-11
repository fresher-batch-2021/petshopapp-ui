function dogProduct(){
    var dogProducts ={"title":"Product for Dogs",
items:[{imageurl: "dog1.png", name: "Pedigree Meat", price: "₹1,405.00"}, 
{ imageurl: "dog2.jpg", name: "pedigree meat", price: "₹790.00" }, 
{ imageurl: "dog3.png", name: "Pedigree Mother &amp; Baby Dog", price: "₹830.00" }, 
{ imageurl: "dog4.jpg", name: "Pedigree Meat Jerky Adult Dog Treat", price: "₹1,405.00" }, 
{imageurl: "dog5.jpg",name:"Pedigree Dentastix Dog Treat Oral Care",price:"₹790.00"},
{imageurl:"dog6.jpg",name:"Royal Canin Maxi Puppy Dog Food",price:"₹5,870"}]};

var count=0;
// content+="<hr>"+"<h1>"+ topDeals.title +"</h1>"+" <hr>";
var content=`<hr><h1>${dogProducts.title}</h1><hr>`;
for (let pet of dogProducts.items) {
  content = content + `<div class="items">
        <img src="images/${pet.imageurl}" alt="image"></a><br><br>
        <p>${pet.name}</p>
        <p>${pet.price}</p>
      </div>`;
      count= count+1;
      if(count==3){
        content+=`<br>`;
        count=0;
      }
  
}
document.querySelector("#dogcontainer").innerHTML = content;
}
dogProduct();