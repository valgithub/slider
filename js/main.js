arrImage=["images/tovar0.png","images/tovar1.png","images/tovar2.png",
	"images/tovar3.png","images/tovar4.png","images/tovar5.png",
	"images/tovar6.png","images/tovar7.png","images/tovar8.png"];
arrName=["Анжелина", "Бритни", "Вероника", "Джелли", 
		"Омелия", "Сюзанна", "Каролина","Шейла", "Элеонора"];


function colorRandom(){
 r=Math.round(Math.random()*255);
 g=Math.round(Math.random()*255);
 b=Math.round(Math.random()*255);
}

colorRandom();
container.style.backgroundColor="RGB("+r+","+g+","+b+")";

colorRandom();
box.style.backgroundColor="RGB("+r+","+g+","+b+")";	

var k=0;

function previous() {
	var slider=document.getElementById("slider");
	k--;
	if (k<0) {
		k=arrImage.length-1;
	}
	slider.src=arrImage[k];
	pp.innerHTML=arrName[k];
	colorRandom();
	box.style.backgroundColor="RGB("+r+","+g+","+b+")";	
	
}

function next(){
	var slider=document.getElementById("slider");
	k++;
	if (k>=arrImage.length) {
		k=0;
	}
	slider.src=arrImage[k];
	pp.innerHTML=arrName[k];
	colorRandom();
	box.style.backgroundColor="RGB("+r+","+g+","+b+")";	
}


