const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  const dropdowns= document.querySelector(".dropdown select");
  const btn = document.querySelector("form button");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  for (let option of dropdowns) {
    for (currcode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currcode;
        newOption.value = currcode;
   
      // if (select.name === "from" && currcode === "USD") {
      //   newOption.selected = "selected";
      // }  else if (select.name === "to" && currcode === "PKR") {
      //   newOption.selected = "selected";
      // }
      select.append(newOption);
    }

    
      select.addEventListener("change", (evt)=> { 
        updateFlag(evt.target);
   } )
      };




// const updateFlag=(element)=>{
//   console.log(element)


// };
  
    //   for (currcode in countryList)
    //   {
    //     console.log(currcode);
    //   }

btn.addEventListener("click",async (evt)=>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if(amtVal==="" || amtVal< 1){
    amtVal=1;
    amount.value="1";

  }
  console.log(fromCurr, toCurr);
  const URL = `${BASE_URL}/${fromCurr.toLowerCase()}/${toCurr.toLowerCase()}.json`;
let response = await fetch(URL);
let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];
let finalAmount = amtVal * rate;
msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
console.log(rate);
});




