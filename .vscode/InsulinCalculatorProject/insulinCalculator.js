console.log("God is with You!!");


let searchbtn = document.getElementById('searchbtn');
searchbtn.addEventListener('click', getData);
	
async function getData(){
	let searchtxt = document.getElementById('searchtxt').value.trim();
	const response =  await fetch(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${searchtxt}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "591430905fmsh2a996402e08f2c6p13525cjsn252708038250",
			"x-rapidapi-host": "calorieninjas.p.rapidapi.com"
		}
	})
	
	const data = await response.json();
	console.log(data.items[0]);
	var obj = data.items[0];
	var result =  (Object.entries(obj));
	console.log(result);
	let html = "";
	result.forEach(e => {
		const ele = e;
		html += `<div class="content" id="display">
        <h1>${ele}</h1>
    </div>`;
	
	})
	document.getElementById('cont').style.display = 'block';
	document.getElementById('display').innerHTML=html;

}

let carbatmeal = document.getElementById('carbatmeal');
carbatmeal.addEventListener('click', insulinAmt);

async function insulinAmt(){
	let searchtxt = document.getElementById('searchtxt').value.trim();
	const response =  await fetch(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${searchtxt}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "591430905fmsh2a996402e08f2c6p13525cjsn252708038250",
			"x-rapidapi-host": "calorieninjas.p.rapidapi.com"
		}
	})
	
	const data = await response.json();
	var obj = data.items[0];
	var resvalue = (Object.values(obj));
	var carbs = resvalue[11];
	console.log(carbs);
	var CHOvalue = carbs/10;
	console.log(CHOvalue);
	let html = "";
	html += `<div class="coverage" id="cov">
	<h1>Carbohydrate Coverage at Meal</h1>
	<h2>Amount of Insulin to be taken: ${CHOvalue} units</h2>
		</div>`;
		document.getElementById('cov').innerHTML = html;

	


}

let highbs = document.getElementById('highbs');
highbs.addEventListener('click', correctionDose);
	
async function correctionDose(){
	let cbs = document.getElementById('currentBS');
	let tbs = document.getElementById('targetBS');
	let html = "";
	html += `<div class="correct" id="correctDose">
	<h1>High Blood Sugar Correction Dose<h1>
	<h2>Enter current blood Sugar</h2>
	<input type="text" id="currentBS">
	<h2>Enter target blood Sugar</h2>
	<input type="text" id="targetBS"><br>
	<button id="calci">Calculate</button>
	<h2 id="result"></h2>
	
</div>`;

	document.getElementById('corr').style.display = 'block';

document.getElementById('corr').innerHTML = html;

let calci = document.getElementById('calci');
calci.addEventListener('click', calciBS);
function calciBS(){
	let cbs = document.getElementById('currentBS').value;
	let tbs = document.getElementById('targetBS').value;
	let res = parseFloat((parseInt(cbs)-parseInt(tbs))/40);
	document.getElementById('result').innerHTML = "Amount of Insulin to be taken: "+res+" units";
	console.log(res);
}

}


let total = document.getElementById('total');
total.addEventListener('click', getSugar);
function getSugar(){

	
	let html = "";
	html += `<div class="totalbs" id="totalmealbs">
	<h1>Total MealTime Dose <h2>
    <h2>Enter carbohydrate coverage at each meal</h2>
    <input type="text" id="chatmeal">
    <h2>Enter blood sugar correction dose</h2>
    <input type="text" id="coatmeal"><br>
    <button id="calctbs" class="btn">Calculate</button>
	<h2 id="tresult"></h2>

   </div>`;
   document.getElementById('tblsugar').style.display = 'block';



document.getElementById('tblsugar').innerHTML = html;
let calctbs = document.getElementById('calctbs');
calctbs.addEventListener('click', calciTBS);
function calciTBS(){
	let chtm = document.getElementById('chatmeal').value;
	let cotm = document.getElementById('coatmeal').value;
	let res = (parseInt(chtm)+parseInt(cotm));
	document.getElementById('tresult').innerHTML = "Amount of Insulin to be taken: "+res+" units";
	console.log(res);
}

}


	
	




	









    

