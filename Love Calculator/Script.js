let result = document.querySelector("#result")
let btn = document.querySelector("#btn")

btn.addEventListener('click', () =>{
    let yourName = document.querySelector("#yourName").value
    let Pname = document.querySelector("#Pname").value
    let randomNo = Math.floor(Math.random()*100)+1;
    // result.innerHTML= "Your name is :" + yourName+" and Your Parent name is :"+Pname+ "Your love Chance is : " +randomNo;
    // result.innerHTML = yourName+Pname+randomNo
    // randomeNumber();
    
    let letters = /^[a-z A-Z]*$/;

    if(yourName === '')
    {
        alert("Please enter Your Name")
    }
    else if(Pname === ''){
        alert("Please enter Your Girlfriend Name:")
    }
    else{
            result.innerHTML=  yourName+" and "+Pname+ "Your love Chance is : " +randomNo + "%";
    }

})

// function randomeNumber(){
   
// }