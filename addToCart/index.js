let selectedItems = [
  {"id":0,"img":"./assets/w2.jpg","name":"Wrist Watch","des":"heigh quality green watch","price":"58.00"},
  {"id":1,"img":"./assets/w1.jpg","name":"Wrist Watch","des":"heigh quality black watch","price":"28.00"},
  {"id":2,"img":"./assets/c1.jpg","name":"Camera","des":"heigh quality black Camera","price":"38.00"},
  

]
let dc = 200;
let itemCounts = Array(selectedItems.length).fill(1);
let totalItems =  ()=>itemCounts.reduce((acc,count)=>acc+count,0);

let itemBasePrices = selectedItems.map(elem => elem.price);


let clutter = "";
function createItemsCard(){
    clutter =""
    const itemsCard = document.querySelector("#items-card");
    for(let i =0;i<selectedItems.length;i++){
      
      clutter += ` 
                  <div id="card">
                      <img src="${selectedItems[i].img}" alt="">
                      <div id="product-des">
                          <p id="product-category">${selectedItems[i].name}</p>
                          <h3 id="product-name">${selectedItems[i].des}</h3>
                      </div>
                      <div id="counter">
                       <i id="remove-${i}" class="ri-subtract-line"></i>
                        <span id="count-${i}">1</span>
                          <i id="add-${i}" class="ri-add-fill"></i>
                          
                         
                      </div>
                      <p>$ <span id="price-${i}">${selectedItems[i].price}</span> </p>
                      <i class="ri-delete-bin-6-line" onclick='deleElement(${i})'></i>
                      
                  </div>  <hr>
         
                  `
                  
    }
  itemsCard.innerHTML = clutter;
  document.querySelector('#total-price-without-DC').innerHTML = totalPriceWithoutDeleveryCharge();

  document.querySelector('#total-price-with-dc').innerHTML = totalPriceWithDeleveryCharge();
  itemCounter();
}

function itemCounter(){

  selectedItems.forEach((elem,index)=>{

let basePrice = Number(elem.price);

let add = document.querySelector(`#add-${index}`);
let remove = document.querySelector(`#remove-${index}`);

add.addEventListener('click',()=>{
    itemCounts[index] += 1;
   
   let ItemPrice = addItemPrice(itemCounts[index],basePrice);
   itemBasePrices[index] = ItemPrice;
    document.querySelector("#items-count").textContent = totalItems();
    document.querySelector("#items-count2").textContent = totalItems();
    document.querySelector(`#count-${index}`).innerHTML = itemCounts[index];
    document.querySelector(`#price-${index}`).innerHTML =  ItemPrice;
    document.querySelector('#total-price-without-DC').innerHTML = totalPriceWithoutDeleveryCharge();

    document.querySelector('#total-price-with-dc').innerHTML = totalPriceWithDeleveryCharge();
 

})
remove.addEventListener('click',()=>{
    if (itemCounts[index] > 0) { // Ensure itemCount doesn't go negative
        itemCounts[index] -= 1;
      
      let  ItemPrice = addItemPrice(itemCounts[index],basePrice);
      itemBasePrices[index] = ItemPrice;
        document.querySelector("#items-count").textContent = totalItems();
        document.querySelector("#items-count2").textContent = totalItems();
        document.querySelector(`#count-${index}`).innerHTML = itemCounts[index];
        document.querySelector(`#price-${index}`).innerHTML =  ItemPrice;
        document.querySelector('#total-price-without-DC').innerHTML = totalPriceWithoutDeleveryCharge();

        document.querySelector('#total-price-with-dc').innerHTML = totalPriceWithDeleveryCharge();
       
    }
  
})


  });

}

function addItemPrice(count,price) {
    return price * count;
  }

let totalPriceWithoutDeleveryCharge = ()=> {
 let total =  itemBasePrices.reduce((acc,value)=>acc+Number(value),0);

return total.toFixed(2); 
}

let totalPriceWithDeleveryCharge = ()=> {
  let total =  itemBasePrices.reduce((acc,value)=>acc+Number(value),0);
 
 return (total+dc).toFixed(2); 
 }
 



createItemsCard();


function deleElement(id){
  
  selectedItems.splice(id,1);
  itemBasePrices.splice(id,1);
  createItemsCard();
 
 }






