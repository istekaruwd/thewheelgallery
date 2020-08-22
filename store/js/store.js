jQuery(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});
	
	//Content Area Mods
	//Content Area Mods
	$(".pagecontainer > table:eq(1) tr:first td:first").addClass("org-background");
	$(".org-background table:eq(1)").addClass("org-content");
	$(".org-background table:eq(3)").addClass("content-middle");
	$(".v4stw").addClass("slider-content-middle");
	
	//Getting and Setting Store Categories
	if($("#org-categories").length > 0) {
		if($("#LeftPanel .lcat").length > 0) {
			$("#org-categories").html($("#LeftPanel .lcat").html());
		}
		$("#org-categories ul[class=lev1]").find("li:last").addClass("org-lastitem");
	}
	
	//Search Box
	var stxt = $("#org-search #org-input").find("input[class=v4sbox]").val();
	$("#org-search #org-input").find("input[class=v4sbox]").focus(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
	$("#org-search #org-input").find("input[class=v4sbox]").blur(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == "") {
			$("#org-search #org-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$("#org-search #org-submit").find("input").click(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
    
	//Footer
	var d = new Date();
	var footer = "\n\r<div class=\"org-wrapcens\">\r\n<div id=\"org-footer\">\r\n<div class=\"ftr-top\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-4\">\r\n<!-- Footer Widget -->\r\n<div class=\"ftr-widget\">\r\n<h4 class=\"ftr-widget-title\">ABOUT US<\/h4>\r\n<div class=\"ftr-about\">\r\n<p>We are company founded by THEWHEELGALLERY in YOUR YEAR. Headquarters is based in YOUR COUNTRY. Our mission is to provide high-quality products and the best price as possible. We do everything to make every customer happy, this is our priority.<\/p>\r\n<p>Do you have questions? Feel free to contact us!<\/p>\r\n<\/div>\r\n<\/div><!-- \/\/ End Footer Widget -->\r\n<\/div>\r\n<div class=\"col-lg-4\">\r\n<!-- Footer Widget -->\r\n<div class=\"ftr-widget\">\r\n<h4 class=\"ftr-widget-title\">BENEFITS<\/h4>\r\n<div class=\"ftr-benefits\">\r\n<p><i class=\"fa fa-check\" aria-hidden=\"true\"><\/i> Only high quality products<\/p>\r\n<p><i class=\"fa fa-check\" aria-hidden=\"true\"><\/i> Best prices<\/p>\r\n<p><i class=\"fa fa-check\" aria-hidden=\"true\"><\/i> Fast Shipping<\/p>\r\n<\/div>\r\n<\/div><!-- \/\/ End Footer Widget -->\r\n<\/div>\r\n<div class=\"col-lg-4\">\r\n<!-- Footer Widget -->\r\n<div class=\"ftr-widget\">\r\n<h4 class=\"ftr-widget-title\">USEFUL LINKS<\/h4>\r\n<ul>\r\n<li><a target=\"_blank\" href=\"https:\/\/www.ebay.com.au\/usr\/thewheelgallery\">About us<\/a><\/li>\r\n<li><a target=\"_blank\" href=\"http:\/\/feedback.ebay.com.au\/ws\/eBayISAPI.dll?ViewFeedback2&amp;userid=thewheelgallery&amp;ftab=AllFeedback&amp;myworld=true&amp;rt=nc\">Feedback<\/a><\/li>\r\n<li><a target=\"_blank\" href=\"http:\/\/my.ebay.com.au\/ws\/eBayISAPI.dll?AcceptSavedSeller&amp;mode=0&amp;preference=0&amp;ssPageName=STRK:MEFS:ADDMP&amp;sellerid=thewheelgallery\">Add us<\/a><\/li>\r\n<li><a target=\"_blank\" href=\"http:\/\/contact.ebay.com.au\/ws\/eBayISAPI.dll?FindAnswers&amp;requested=thewheelgallery&amp;_trksid=p2545226.m2531.l4583&amp;rt=nc\">Contact<\/a><\/li>\r\n<\/ul>\r\n<\/div><!-- \/\/ End Footer Widget -->\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<div class=\"ftr-btm\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"copy-right text-center\">\r\n\u00a9 2020 THEWHEELGALLERY. All Copyrights Reserved\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>";
	
    if(pageName != "PageAboutMeViewStore") {
		if($(".org-content").length > 0) {
			$(".org-content").after(footer);			
		}
	}
});