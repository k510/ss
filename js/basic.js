window.onload=function(){
    checkCookie();
}
function setCookie(name,value)
{
var Days = 30;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}
function checkCookie(){
    var time=getCookie("time");
    var ctitle=getCookie("title");
    var ctitletext=getCookie("titletext");
    if(time==""&&time==null){
        setCookie("time","open");
    }
    else if (time=="open"){
        document.getElementById('time').style.zIndex='20';
        document.getElementById('time').className='open';
        document.getElementById("b1").className="b1 on-b1";
        document.getElementById("b2").className="b2 on-b2";
    }else if (time=="close"){
        document.getElementById('time').style.zIndex='-10';
        document.getElementById('time').className='close';
        document.getElementById("b1").className="b1 off-b1";
        document.getElementById("b2").className="b2 off-b2";
    }
    if(ctitle==""&&ctitle==null){
        setCookie("time","open");
    }
    else if (ctitle=="open"){
        document.getElementById("title").style.display = 'inline-block';
        document.getElementById("titletext").style.display='inline-block';
        document.getElementById("b3").className="b1 on-b1";
        document.getElementById("b4").className="b2 on-b2";
    }else if (ctitle=="close"){
        document.getElementById("title").style.display = 'none';
        document.getElementById("titletext").style.display = 'none';
        document.getElementById("b3").className="b1 off-b1";
        document.getElementById("b4").className="b2 off-b2";
    }
    //document.getElementById("titletext").innerText=ctitletext;
}
function opentitle(){
    titleopen=document.getElementById('b3').className;
    if(titleopen=='b1 off-b1'){
        document.getElementById("title").style.display = 'inline-block';
        document.getElementById("titletext").style.display = 'inline-block';
        document.getElementById("b3").className="b1 on-b1";
        document.getElementById("b4").className="b2 on-b2";
        setCookie("title","open");

    }
    else{
        document.getElementById("title").style.display = 'none';
        document.getElementById("titletext").style.display = 'none';
        document.getElementById("b3").className="b1 off-b1";
        document.getElementById("b4").className="b2 off-b2";
        setCookie("title","close");
        
    }
}
function openset(){
    display=document.getElementById('menu').className;
    if(display=='close'){
        document.getElementById("menu").style.transform = 'translatey(150%)';
        document.getElementById('menu').className='open';
    }
    else{
        document.getElementById("menu").style.transform = 'translatey(-150%)';
        document.getElementById('menu').className='close';
    }
}

function opentime(){
    timedisplay=document.getElementById('time').className;
    if(timedisplay=='open'){
        document.getElementById('time').style.zIndex='-10';
        document.getElementById('time').className='close';
        document.getElementById("b1").className="b1 off-b1";
        document.getElementById("b2").className="b2 off-b2";
        setCookie("time","close");
    }
    else{
        document.getElementById('time').style.zIndex='20';
        document.getElementById('time').className='open';
        document.getElementById("b1").className="b1 on-b1";
        document.getElementById("b2").className="b2 on-b2";
        setCookie("time","open");
    } 
}
    function title() {
        var storage=window.localStorage;
        var atitletext = document.getElementById("title").value;
        var textbox=document.getElementById("titletext")
            //写入a字段
            storage["titletext"]=atitletext;

            textbox.innerHTML = atitletext;
            
    }


function search(){
    var text=document.getElementById("textbox").value;
    var link="https://www.baidu.com/s?wd="+text;//可以加入空状态搜索提示
    if(text!=""){
        window.open(link, "_blank");
    }
}
$(function(){  
    $('#textbox').bind('keypress',function(event){  
        if(event.keyCode == "13"){
            search();
        }  
    });  
});  

