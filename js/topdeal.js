// function topdeals(){
// const param=new URLSearchParams(window.location.search.substr(1));
//         var Id=param;
//         let images=[{id:1,imgUrl:"item1.jpg",price:100,name:"food"}]; 
//         let content="";

//         for(let data of images){
//             if(data.id==Id){
//                 content=`<div>
//                 <p>hello</p>
//                 <img src="images/${data.imgUrl}">
//                 <p>${data.price}</p>
//                 <p>${data.name}</p>
//                 </div>`;
//             }
//             document.querySelector(".row").innerHTML=content;
//         }}

var topdeals = [{ imageurl: "item1.jpg", name: "Pedigree Meat", price: "₹1,405.00" }, { imageurl: "item2.jpg", name: "pedigree meat", price: "₹790.00" }, { imageurl: "item3.jpeg", name: "Pedigree Mother &amp; Baby Dog", price: "₹830.00" }, { imageurl: "item4.jpg", name: "Pedigree Meat Jerky Adult Dog Treat", price: "₹1,405.00" }, {imageurl: "item5.jpg",name:"Pedigree Dentastix Dog Treat Oral Care",price:"₹790.00"},{imageurl:"item6.jpg",name:"Royal Canin Maxi Puppy Dog Food",price:"₹5,870"}];
let content = "";
// var count=0;
for (let pet of topdeals) {
  content = content + `<div class="items">
        <a href="product.html"><img src="images/${pet.imageurl}" alt="image"></a><br>
        <p>${pet.name}</p><br>
        <p>${pet.price}</p>
      </div>`
  document.querySelector("#rowcontainer").innerHTML = content;
}