(function(){
	let pricePounds;
    const exchangeRate = 0.86;
    let priceEuros;

    const convertForm = document.getElementById('myForm');
    const msg = document.getElementById('msg');
    convertForm.addEventListener('submit', (ev) =>{
        console.info("SUBMITTED");
        ev.preventDefault();
        //Pounds to Euros
        priceEuros = 0;
        pricePounds = parseFloat(document.getElementById('pounds').value);
        console.info(priceEuros);
        if(isNaN(pricePounds)){
	        msg.style.display = "block";
	        msg.innerHTML = "You must enter a number";
	        msg.setAttribute('class', 'error');
        }else{
	        if(pricePounds === 0){
	            msg.style.display = "block";
	            msg.innerHTML = "You must enter more than zero."
	            msg.setAttribute('class', 'error');
            }else{
	            priceEuros = pricePounds * exchangeRate;
	            msg.style.display = "block";
	            priceEuros = priceEuros.toFixed(2);
	            msg.innerHTML = "You will get &euro;"+priceEuros;
	            msg.removeAttribute('class');
            }
        }
        //Euros to Pounds
        pricePounds = 0;
        priceEuros = parseFloat(document.getElementById('euros').value);
        console.info(pricePounds);
        if(isNaN(priceEuros)){
	        msg.style.display = "block";
	        msg.innerHTML = "You must enter a number";
	        msg.setAttribute('class', 'error');
        }else{
	        if(priceEuros === 0){
	            msg.style.display = "block";
	            msg.innerHTML = "You must enter more than zero."
	            msg.setAttribute('class', 'error');
            }else{
	            pricePounds = priceEuros / exchangeRate;
	            msg.style.display = "block";
	            pricePounds = pricePounds.toFixed(2);
	            msg.innerHTML = "You will get &pound;"+pricePounds;
	            msg.removeAttribute('class');
            }
        }
    });
})();