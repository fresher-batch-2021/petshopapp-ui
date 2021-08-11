
var indeximg=[{imageurl:"dog.jpg",name:"product for dogs"},
{imageurl:"cat.jpg",name:"product for cats"},{imageurl:"bird.png",name:"product for birds"}];
let content="";
for(let img of indeximg)
{
    content=content+`
    <div class="items1" >
                <a href="product.html"><img src="images/${img.imageurl}" alt="img"></a><br><br>
                <p> ${img.name}</p>
                
            </div>`;
            document.querySelector("#category").innerHTML=content;
}
