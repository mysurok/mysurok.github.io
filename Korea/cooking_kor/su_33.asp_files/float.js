var offsetleft=785
var offsettop=118

var ns4=document.layers?1:0
var ie4=document.all?1:0
var ns6=document.getElementById&&!document.all?1:0

function getCookie( name )
{
        var nameOfCookie = name + "=";
        var x = 0;
        while ( x <= document.cookie.length )
        {
                var y = (x+nameOfCookie.length);
                if ( document.cookie.substring( x, y ) == nameOfCookie ) {
                        if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
                                endOfCookie = document.cookie.length;
                        return unescape( document.cookie.substring( y, endOfCookie ) );
                }
                x = document.cookie.indexOf( " ", x ) + 1;
                if ( x == 0 )
                        break;
        }
        return "";
}

function setCookie( name ) 
{
    if( document.fchk.chk001.checked )
    {
        value = "true";
    }
    else
    {
        value = "false";
    }

    document.cookie = name + "=" + escape( value ) + "; path=/; expires="
}

function makeStatic()
{
    var flgCheck;
    var topblank;
    var addtop;

    if ( getCookie( "flgCheck" )  == "true" ) 
    { 
        flgCheck = 1;
        document.fchk.chk001.checked ="true";
    }
    else
    {
        flgCheck = 0;
    }

    if (ie4) 
    {
        topblank = document.body.scrollTop + 118 - floater.offsetTop;
        addtop = Math.max(Math.abs(Math.round(topblank * 0.15)), 1) * (topblank < 0 ? -1 : 1);

        if (flgCheck)
        {
            floater.style.pixelTop += 0;
        }
        else
        {
            if( topblank != 0 )
            {
                floater.style.top = floater.offsetTop + addtop;
            }
        }
    }
    else if (ns6)
    {
        topblank = self.pageYOffset + 118 - document.getElementById("floater").offsetTop;
        addtop = Math.max(Math.abs(Math.round(topblank * 0.15)), 1) * (topblank < 0 ? -1 : 1);
        
        if (flgCheck)
        {
            document.getElementById("floater").style.top+=0;
        }
        else
        {
            if( topblank != 0 )
            {
                document.getElementById("floater").style.top = document.getElementById("floater").offsetTop + addtop;
            }
//            document.getElementById("floater").style.top=window.pageYOffset+offsettop;
        }
    }
    else if (ns4)
    {
        topblank = self.pageYOffset + 118 - document.getElementById("floater").offsetTop;
        addtop = Math.max(Math.abs(Math.round(topblank * 0.15)), 1) * (topblank < 0 ? -1 : 1);

        if (flgCheck)
        {
            eval(document.object1.top) += 0;
        }
        else
        {
                document.getElementById("floater").style.top = document.getElementById("floater").offsetTop + addtop;
        }
    }
    
    setTimeout("makeStatic()",10);
}

if (ie4||ns6) {document.write('<span id="floater" style="position:absolute; Top:118; Left:'+offsetleft+'; ">')}
else if (ns4){ document.write('<LAYER top="80" name="floater" left="'+offsetleft+'">')}

if (ie4||ns6||ns4)
document.write("<table border=0 cellpadding=0 cellspacing=0 width=150>");
document.write("<tr><td colspan=3><img src=/common/images/include/remote01.gif width=150 height=29 border=0></td></tr>");
document.write("<tr><td valign=top bgcolor=#FFB926><img src=/common/images/trans.gif width=3 height=1 border=0></td><td width=144>");
document.write("<table border=0 cellpadding=0 cellspacing=0 width=144>");
document.write("<tr><td height=6><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");
document.write("<tr><td width=10><img src=/common/images/trans.gif width=10 height=0 border=0></td><td width=134>");
document.write("<table border=0 cellpadding=0 cellspacing=0 width=134>");
document.write("<tr><td colspan=7><img src=/common/images/include/remote_text01.gif border=0></td></tr>");
document.write("<tr><td height=12><img src=/common/images/trans.gif width=1 height=12 border=0></td></tr>");
document.write("<tr><td width=15></td>");
document.write("<td><a href=/sightseeing/reservation/accom.asp onfocus=this.blur()><img src=/common/images/include/remote_btn01.gif border=0></a></td>");
document.write("<td width=14></td>");
document.write("<td><a href=# onfocus=this.blur()><img src=/common/images/include/remote_btn02.gif border=0></a><br><div id=soon_02_1 style='position:absolute; z-index:100; visibility:hidden;'><table cellpadding=0 cellspacing=1 border=0 bgcolor=#9A9A9A width=70><tr><td bgcolor='#FFFFFF' style='padding:0 4 2 4; font-size:10px'>В скором времени</td></tr></table></div></td>");
document.write("<td width=17></td>");
document.write("<td><a href=# onfocus=this.blur()><img src=/common/images/include/remote_btn03.gif border=0 onMouseOver=javascript:LayerSH('soon_02_1','show') onMouseOut=javascript:LayerSH('soon_02_1','hide')></a></td>");
document.write("<td width=23></td>");
document.write("</tr>");
document.write("</table>");
document.write("<table border=0 cellpadding=0 cellspacing=0 width=134>");
document.write("<tr><td height=6><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");
document.write("<tr><td><img src=/common/images/include/remote_line.gif width=124 height=1 border=0></td></tr>");
document.write("<tr><td height=5><img src=/common/images/trans.gif width=1 height=5 border=0></td></tr>");
document.write("<tr><td><a href=/sightseeing/transport/subway/subway_main.asp onfocus=this.blur() target=_top><img src=/common/images/include/remote_text02.gif border=0></a></td></tr>");
document.write("<tr><td height=6><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");
document.write("<tr><td><img src=/common/images/include/remote_line.gif width=124 height=1 border=0></td></tr>");
document.write("<tr><td height=5><img src=/common/images/trans.gif width=1 height=5 border=0></td></tr>");
<!-- document.write("<tr><td><a href=/sightseeing/directory/main.asp onfocus=this.blur() target=_top><img src=/common/images/include/remote_text03.gif  border=0></a></td></tr>");-->
<!-- document.write("<tr><td height=5><img src=/common/images/trans.gif width=1 height=5 border=0></td></tr>");-->
<!-- document.write("<tr><td><img src=/common/images/include/remote_line.gif width=124 height=1 border=0></td></tr>");-->
<!-- document.write("<tr><td height=6><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");-->
document.write("<tr><td><img src=/common/images/include/remote_text04.gif  border=0></td></tr>");
document.write("<tr><td height=8><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");
document.write("<tr><td><a href=/sightseeing/tic/about_tic.asp onfocus=this.blur() target=_top><img src=/common/images/include/remote_text05.gif  border=0></a></td></tr>");
document.write("<tr><td height=4><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");
document.write("<tr><td><a href=/overseas/moscow/brochures_01.asp onfocus=this.blur() target=_top><img src=/common/images/include/remote_text11.gif  border=0></a></td></tr>");
document.write("<tr><td height=4><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");
document.write("<tr><td><a href=/sightseeing/tic/1330.asp onfocus=this.blur() target=_top><img src=/common/images/include/remote_text06.gif  border=0></a></td></tr>");
document.write("<tr><td height=4><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");
document.write("<tr><td><a href=/sightseeing/tic/goodwill.asp onfocus=this.blur() target=_top><img src=/common/images/include/remote_text07.gif border=0></a></td></tr>");
document.write("<tr><td height=4><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");
//document.write("<tr><td><a href=/sightseeing/tic/e_book.asp onfocus=this.blur() target=_top><img src=/common/images/include/remote_text08.gif border=0></a></td></tr>");
//document.write("<tr><td height=4><img src=/common/images/trans.gif width=1 height=4 border=0></td></tr>");
document.write("<tr><td><a href=/sightseeing/tic/tcc.asp onfocus=this.blur() target=_top><img src=/common/images/include/remote_text09.gif border=0></a></td></tr>");
document.write("<tr><td height=4><img src=/common/images/trans.gif width=1 height=4 border=0></td></tr>");
document.write("<tr><td><a href=/sightseeing/tic/faq_list.asp onfocus=this.blur() target=_top><img src=/common/images/include/remote_text10.gif border=0></a></td></tr>");
document.write("<tr><td height=7><img src=/common/images/trans.gif width=1 height=7 border=0></td></tr>");
document.write("<tr><td><img src=/common/images/include/remote_line.gif width=124 height=1 border=0></td></tr>");
document.write("<tr><td height=7><img src=/common/images/trans.gif width=1 height=7 border=0></td></tr>");
document.write("<tr><td><input type='Checkbox' value='' name='chk001' onClick=setCookie('flgCheck');><img src=/common/images/include/remote05.gif border=0></td></tr>");
document.write("<tr><td height=6><img src=/common/images/trans.gif width=1 height=6 border=0></td></tr>");
document.write("</table>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</td>");
document.write("<td valign=top bgcolor=#FFB926><img src=/common/images/trans.gif width=3 height=1 border=0></td>");
document.write("</tr>");
document.write("<tr><td colspan=3 valign=top><img src=/common/images/include/remote04.gif  border=0></td></tr>");
document.write("</table>");

if (ie4||ns6) {document.write('</span>')}
else if (ns4){document.write('</layer>')}

function menu3(){
if (ns6||ie4||ns4)
makeStatic() }

window.onload=menu3


