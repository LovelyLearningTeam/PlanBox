/*
	@authors xiaofeng (422972230@qq.com)
	@date 2016-12-25
	@version $Id$
*/
$(document).ready(function () {
	var xf_winwidth = $(window).width();
	var xf_winheight = $(window).height();
	$("html").css("fontSize",xf_winwidth/160*7+"px");
	document.body.addEventListener('touchstart', function () { }); //css active ios 

	//登录
	$(".xf_tybutton a").on("click", function(){
		var name = $("#login_page #name").val();
		var age = $("#login_page #password").val();
 		$.ajax({
	        type : "post",
	        url: "http://localhost:3000/users/addUser",
	        data : {
	        	name:name,
	        	age:age
	        },
	        dataType : "jsonp",
	        jsonp:'callback',
	        success : function (json) {
	            console.log("注册成功");

	   			console.log(json);
	        },
	        error : function(){
	            console.log("注册失败！");
	        }
	    });
	});
   
});
$(window).on('resize',function(){
	var xf_winwidth = $(window).width();
	var xf_winheight = $(window).height();
	$("html").css("fontSize",xf_winwidth/160*7+"px");
});
window.onload=function(){
    $(".loading").hide();
}