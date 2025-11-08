/**  팝업창 이미지 여는 Module
      url : open target window(확장자는 변경가능,혼영사용시 확장자 파라미터 삭제 사용가능)
      wd : open window 가로값
      he : open window 세로값
      flag : scroll 여부(0:스크롤 없슴 / 1:스크롤 있슴)
      그외 left. top 지정값으로 좌표 지정 가능
      
     예) pop('sample.html',500,500,1) 
          => 가로,세로 500px인 스크롤 있는 팝업창 호출
**/
function pop(pop,width,height,flag)
{
	var url = pop;
	var wd = width;
	var he = height;
    
    if (flag == 0 )
    {
        window.open(url,"","toolbar=0,menubar=0,scrollbars=no,resizable=no,width=" + wd +",height=" + he + ";")
    }
    else
    {
        window.open(url,"","toolbar=0,menubar=0,scrollbars=yes,resizable=no,width=" + wd +",height=" + he + ";")
    }
}
function pop2(pop,width,height,flag)
{
	var url = pop;
	var wd = width;
	var he = height;
    
    if (flag == 0 )
    {
        window.open(url,"","toolbar=yes,menubar=0,scrollbars=no,resizable=no,width=" + wd +",height=" + he + ";")
    }
    else
    {
        window.open(url,"","toolbar=yes,menubar=0,scrollbars=yes,resizable=no,width=" + wd +",height=" + he + ";")
    }
}

/***********************************************************************************/
/***********************************************************************************/
/**  Menu Display Function Module
      IE5.0 / NS6.1 기준 
      :   menuclick 라는  함수에서 "ti" 라는 인자값을 파라미터로 받는다.
          레이어이름은 변경할 수 있다. - 함수내에 있는 레이어 이름도 변경해 주어야 함.
**/
var tz=1;
function menuclick(ti)
{
// Browser type : Explore 
    if (document.all) 
    {
        if(document.all["menuclick"+ti].style.display=="")
        {
            document.all["menuclick"+ti].style.display="none";
            tz=0;
        }
        else
        {
            if(tz != 0)
            {
                document.all["menuclick"+tz].style.display="none";
                document.all["menuclick"+ti].style.display="";
            }
            
            document.all["menuclick"+ti].style.display="";
            tz=ti;
        }
    }
// Browser type : Netscape 6.0부터 4.0대는 getElementById()  함수대신 Layer객체 참조
    else
    {
        if(document.getElementById("menuclick"+ti).style.display=="")
        {
            document.getElementById("menuclick"+ti).style.display="none";
            tz=0;
        }
        else
        {
            if(tz != 0)
            {
                document.getElementById("menuclick"+tz).style.display="none";
                document.getElementById("menuclick"+ti).style.display="";
            }
            document.getElementById("menuclick"+ti).style.display="";
            tz=ti;
        }
    }
}

/***********************************************************************************/
/***********************************************************************************/
/**  레이어 show/hide 함수
       ns7.0대에 맞추려면 "getElementById()"  함수 사용
       document.layers 객체는 ns4 에서 사용 
**/
function LayerSH(LayerName,Status) 
{
//    ns4 = (document.getElementById)?true:false;
//    ie4 = (document.all)?true:false;

    if (navigator.appName == "Netscape")
    {
		LayerN = document.getElementById(LayerName).style;
		if (Status == 'show') LayerN.visibility = 'visible';
		if (Status == 'hide') LayerN.visibility = 'hidden';
    }	
    else
    {
		LayerN = document.all[LayerName].style;
		if (Status == 'show') LayerN.visibility = 'visible';
		if (Status == 'hide') LayerN.visibility = 'hidden';
	}
}



////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////  Destination Flash Link Script  ///////////////////////////////////////////

function map01()
{
	location.href = "/sightseeing/destination/depth03_direct.asp?Address=6142";   //////////seoul
}

function map02()
{
	location.href = "/sightseeing/destination/depth03_direct.asp?Address=8551";   //////////Busan
}

function map03()
{
	location.href = "/sightseeing/destination/depth03_direct.asp?Address=11614";   //////////Incheon
}

function map04()
{
	location.href = "/sightseeing/destination/depth02.asp?Address=21134";   //////////Gyeonggi-do
}

function map05()
{
	location.href = "/sightseeing/destination/depth02.asp?Address=15741";   //////////Gangwon-do
}

function map06()
{
	location.href = "/sightseeing/destination/depth02.asp?Address=40084";   //////////Chungcheongbuk-do
}

function map07()
{
	location.href = "/sightseeing/destination/depth02.asp?Address=38693";   //////////Chungcheongnam-do
}

function map08()
{
	location.href = "/sightseeing/destination/depth02.asp?Address=36071";   //////////Jeollabuk-do
}

function map09()
{
	location.href = "/sightseeing/destination/depth02.asp?Address=32863";   //////////Jeollanam-do
}

function map10()
{
	location.href = "/sightseeing/destination/depth02.asp?Address=29207";   //////////Gyeongsangbuk-do
}

function map11()
{
	location.href = "/sightseeing/destination/depth02.asp?Address=24703";   //////////Gyeongsangnam-do
}

function map12()
{
	location.href = "/sightseeing/destination/depth02.asp?Address=36100";   //////////Jeju-do
}

function map13()
{
	location.href = "/sightseeing/destination/depth03.asp?Address=29207&Address2=25712";   //////////Gyeongju
}

function map14()
{
	location.href = "/sightseeing/destination/depth03.asp?Address=15741&Address2=14366";   //////////Sokcho
}


function map15()
{
	location.href = "/sightseeing/destination/depth03_direct.asp?Address=10277";   //////////Daegu
}

function map16()
{
	location.href = "/sightseeing/destination/depth03_direct.asp?Address=12521";   //////////Gwangju
}

function map17()
{
	location.href = "/sightseeing/destination/depth03_direct.asp?Address=13314";   //////////Daejeon
}

function map18()
{
	location.href = "/sightseeing/destination/depth03_direct.asp?Address=13918";   //////////Ulsan
}
//////////////////////////////////////////////////////////////////////////// //////////////  
//resize popup :: 이미지 크기에맞춰서 팝업이떠요
function view(what) { 
var imgwin = window.open("",'WIN','scrollbars=no,status=no,toolbar=no,resizable=1,location=no,menu=no,width=10,height=10'); 
imgwin.focus(); 
imgwin.document.open(); 
imgwin.document.write("<html>\n"); 
imgwin.document.write("<head>\n"); 
imgwin.document.write("<title>Tour2korea</title>\n"); 

imgwin.document.write("<sc"+"ript>\n"); 
imgwin.document.write("function resize() {\n"); 
imgwin.document.write("pic = document.il;\n"); 
imgwin.document.write("if (eval(pic).height) { var name = navigator.appName\n"); 
imgwin.document.write("  if (name == 'Microsoft Internet Explorer') { myHeight = eval(pic).height + 40; myWidth = eval(pic).width + 12;\n"); 
imgwin.document.write("  } else { myHeight = eval(pic).height + 9; myWidth = eval(pic).width; }\n"); 
imgwin.document.write("  clearTimeout();\n"); 

// -- 이미지 싸이즈 조정 시작
//imgwin.document.write("  alert(myHeight+','+myWidth); ");
imgwin.document.write("  if  (myHeight > 650) { myHeight = 650 } ");
imgwin.document.write("  if  (myWidth > 500) { myWidth = 500 } ");
//imgwin.document.write("  alert(myHeight+','+myWidth); ");
// -- 이미지 싸이즈 조정 끝

imgwin.document.write("  var height = screen.height;\n"); 
imgwin.document.write("  var width = screen.width;\n"); 
imgwin.document.write("  var leftpos = width / 2 - myWidth / 2;\n"); 
imgwin.document.write("  var toppos = height / 2 - myHeight / 2; \n"); 
imgwin.document.write("  self.moveTo(leftpos, toppos);\n"); 
imgwin.document.write("  self.resizeTo(myWidth, myHeight);\n"); 
imgwin.document.write("}else setTimeOut(resize(), 100);}\n"); 
imgwin.document.write("</sc"+"ript>\n"); 

imgwin.document.write("</head>\n"); 
imgwin.document.write('<body topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" bgcolor="#FFFFFF" oncontextmenu="return false;">\n'); 

imgwin.document.write("<img border=0 src="+what+" xwidth=100 xheight=9 name=il onload='resize();' onclick='window.close()'>\n"); 
imgwin.document.write("</body>\n"); 
imgwin.document.close(); 

} 
