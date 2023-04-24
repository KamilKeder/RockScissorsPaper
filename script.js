var wynik_gracz = document.querySelector("#wynik_gracz");
var wynik_komputer = document.querySelector("#wynik_komputer");
var wybor_gracz = document.querySelector("#wybor_gracz");
var wybor_komputer = document.querySelector("#wybor_komputer");
var gra_kamien = document.querySelector("#gra_kamien");
var gra_papier = document.querySelector("#gra_papier");
var gra_nozyce = document.querySelector("#gra_nozyce");
var gra_reset = document.querySelector("#gra_reset");
var p_info = document.querySelector("#p_info");
var gracz;
var komputer1;

gra_kamien.addEventListener("click",function(){
wybor_gracz.innerHTML ="<img src='png/kamien.png' style='transform: scaleX(-1);'>";
gracz = "kamien";
komputer();
})
gra_papier.addEventListener("click",function(){
wybor_gracz.innerHTML ="<img src='png/papier.png'>";
gracz = "papier";
komputer();
})
gra_nozyce.addEventListener("click",function(){
wybor_gracz.innerHTML ="<img src='png/nozyce.png'>";
gracz = "nozyce";
komputer();
})
function komputer(){
	var random = Math.floor(Math.random()*3)+1;
	if (random == 1) {
		wybor_komputer.innerHTML ="<img src='png/kamien.png'>";
		komputer1 = "kamien";
		sprawdzenie();
	}
	if (random == 2) {
		wybor_komputer.innerHTML ="<img src='png/papier.png' style='transform: scaleX(-1);'>";
		komputer1 = "papier";
		sprawdzenie();
	}
	if (random == 3) {
		wybor_komputer.innerHTML ="<img src='png/nozyce.png' style='transform: scaleX(-1);'>";
		komputer1 = "nozyce";
		sprawdzenie();
	}
}

function sprawdzenie(){
	if (gracz == "papier"&& komputer1 == "kamien"||gracz == "kamien"&& komputer1 == "nozyce"||gracz == "nozyce"&& komputer1 == "papier") {
		p_info.innerHTML = "Wygrywa Gracz"
		wynik_gracz.innerHTML = Number(wynik_gracz.innerHTML) + 1;	
	}
	if (komputer1 == "papier"&& gracz == "kamien"||komputer1 == "kamien"&& gracz == "nozyce"||komputer1 == "nozyce"&& gracz == "papier") {
		p_info.innerHTML = "Wygrywa Komputer"
		wynik_komputer.innerHTML = Number(wynik_komputer.innerHTML) + 1;	
	}
	if (gracz == "papier"&& komputer1 == "papier"||gracz == "kamien"&& komputer1 == "kamien"||gracz == "nozyce"&& komputer1 == "nozyce") {
		p_info.innerHTML = "Remis"	
	}

}
gra_reset.addEventListener("click",function(){
	wynik_gracz.innerHTML = 0;
	wynik_komputer.innerHTML = 0;
	p_info.innerHTML = "";
	wybor_komputer.innerHTML ="";
	wybor_gracz.innerHTML ="";
})