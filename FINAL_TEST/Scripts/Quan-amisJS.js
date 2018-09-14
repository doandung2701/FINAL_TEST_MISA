
 $('.quan-left-menu > div').click(function(){
 	var name = 'div[tag=' + $(this).attr('name') + ']';
 	var thisDiv = $(name).css('display');
 	if($(this).attr("class") != 'sub-menu')
 		$('.sub-menu').css("display",'none');
 	$(name).css('display',thisDiv);
 	if(thisDiv == "none")
 		$(name).show(200);
 	else
 		$(name).hide(200);
 })
 $("div.right-menu-icon").click(function(){
 	var name = 'div.menu-text[subtext=' + $(this).attr("subtext") + ']';
 	var thisDiv = $(name).css('display');
 	$('.menu-text').hide();
 	$(name).css('display', thisDiv);
 	if(thisDiv == "none")
 		$(name).show(200);
 	else
 		$(name).hide(200);	
 })
 $("div.right-menu-icon").click(function(){
 	var name = 'div.menu-textt[subtext=' + $(this).attr("subtext") + ']';
 	var thisDiv = $(name).css('display');
 	$('.menu-textt').hide();
 	$(name).css('display', thisDiv);
 	if(thisDiv == "none")
 		$(name).css('display', 'flex');
 	else
 		$(name).hide(200);	
 })

 $(document).click(function(event){
 	var elmt = $(event.target).attr("class");
 	var flag = 0;
 	var getElement = $('.menu-text','.menu-textt').css('display');
 	$.each( function(getElement, index) {
 		if(getElement[index] != "none") 
 			flag = 1;
 	});
 	if(flag == 1){
 		// debugger
 		$('.menu-text').css('display','none');
 		$('.menu-textt').css('display','none');
 	}
 })