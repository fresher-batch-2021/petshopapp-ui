
var indexImg=[{imageurl:"dog.jpg",name:"product for dogs",category:"dog"},
{imageurl:"cat.jpg",name:"product for cats",category:"cat"},
{imageurl:"bird.png",name:"product for birds",category:"bird"}];
let content="";
for(let img of indexImg)
{
    content=content+`
    <div class="indeximg" >
                <a href="product.html?category=${img.category}"><img src="images/${img.imageurl}" alt="img"></a><br><br>
                <p> ${img.name}</p>
                
            </div>`;
            document.querySelector("#category").innerHTML=content;
}
