
function displayCart(){
let cartitem=[{itemno:1,products:"pedigriee",price:"2000"}]
let content = `<table>
<caption>cart Table</caption>
<tr>
    <th class="itemno">Item No</th>
    <th class="product">Product</th>
    <th class="price">Price</th>
    
</tr>`;
  let end = `</table>`;

for(let item of cartitem){
    content=content+`<tr> <td>${item.itemno}</td>
    <td>${item.products}</td>
    <td>${item.price}</td>
    <td></td>
  </tr> `
}
content= content + end;
document.querySelector("#table").innerHTML=content;
}
displayCart();