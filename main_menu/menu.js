
var menu=["Electrical calulator <span style='float:right;'>0</span>","Light Calulator<span style='float:right;'>0</span>","Finance Calculator<span style='float:right;'>28</span>","Converters<span style='float:right;'>17</span>","Maths<span style='float:right;'>44</span>","Health Calculator<span style='float:right;'>9</span>","Statistics <span style='float:right;'>15</span>","Time & Date calculator <span style='float:right;'>1</span>","Chemistry<span style='float:right;'>8</span>","Business<span style='float:right;'>13</span>","Construction<span style='float:right;'>2</span>","Physics<span style='float:right;'>8</span>","Time Zone Convertor<span style='float:right;'>8</span>"];
var icon=["mdi-flash","mdi-lamp","mdi-money","mdi-swap","mdi-functions","mdi-hospital","mdi-equalizer","mdi-time","mdi-drink","mdi-card-travel","mdi-landscape","mdi-local-parking","mdi-pin"];
var href=["electrical/index.html","light/menu.html","Finance/menu.html","converters/menu.html","math/menu.html","health/menu.html","statistics/menu.html","dateandtime/menu.html","chemistry/menu.html","business/menu.html","construction/menu.html","physics/menu.html","timezone/menu.html"];

var loc=window.location.href;
var split=loc.split("/");
var loc_len=split.length;
var menuindex=split[loc_len-2];
var index=false;
if(loc.includes('starter/index.html'))
{
	index=true;
}
for(var i=0;i<menu.length;i++)
{

	var li=document.createElement("li");
	var a=document.createElement("a");

	console.log(menu[i].replace(" ","").toLowerCase().includes("dateandtime"));
	console.log(menu[i].replace(" ",""));
	console.log(menu[i].replace(" ","").toLowerCase());
	console.log(menuindex);
	if(menu[i].includes("&") && menuindex==("dateandtime"))
	{
		li.className="active";
		a.href="menu.html";
	}
	if(menu[i].replace(" ","").toLowerCase().includes("TimeZone") && menuindex==("timezone"))
	{
		li.className="active";
		a.href="menu.html";
	}
	var timeb=false;
	if(menu[i].includes("Zone"))
	{
		var str=window.location.href.split("timezone")[1].split("/");
		if(str.length==3)
		{
			timeb=true;
		}
	}
	if(menu[i].replace(" ","").toLowerCase().includes(menuindex.toLowerCase()))
	{

		li.className="active";
		//if(menuindex.toLowerCase()=="temperature")
		{
			//a.href="../"+href[i];
		}
		//else
		{
			a.href="menu.html";
		}

	}
	else
	{
		if(index==true)
		{
			a.href=href[i];
		}
		else if(timeb==true)
		{
				a.href="../../"+href[i];
		}
		else {
			a.href="../"+href[i];
		}

	}

	var link=document.createElement("i");
	link.className = "icon mdi "+icon[i];
	var span=document.createElement("span");
	span.innerHTML=menu[i];
	a.appendChild(link);
	a.appendChild(span);
	li.appendChild(a);
	document.getElementById('menu_bar').appendChild(li);
}

function toFraction(x) {
    var tolerance = 1.0E-6;
    var h1=1; var h2=0;
    var k1=0; var k2=1;
    var b = x;
    do {
        var a = Math.floor(b);
        var aux = h1; h1 = a*h1+h2; h2 = aux;
        aux = k1; k1 = a*k1+k2; k2 = aux;
        b = 1/(b-a);
    } while (Math.abs(x-h1/k1) > x*tolerance);
		if(k1!=1)
		{
			return h1+"/"+k1;
		}
		else {
			if(h1%2==0)
			{
				return h1/2+"/"+"2";
			}
			else if(h1%3==0){
				return h1/3+"/"+"3";
			}
			else if(h1%5==0)
			{
				return h1/5+"/"+"5";
			}
			else if(h1%7==0)
			{
				return h1/7+"/"+"7";
			}
			else if(h1%9==0)
			{
				return h1/9+"/"+"9";
			}
			else if(h1%13==0)
			{
				return h1/13+"/"+"13";
			}
			return h1;
		}

}
