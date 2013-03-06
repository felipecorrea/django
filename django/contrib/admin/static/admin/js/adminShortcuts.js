	$(".shortcutsmap").hide()
	$('.shortcutsmap').data('closed',true)
	
	$("#gotocontainer").hide()
	$('#gotocontainer').data('closed',true)
	
	var go_value = '';
	var apps_list = [];
	
	document.getElementById('go_input_form').onsubmit= function() {
    	
    	go_value = document.getElementById('go_input').value;
    	
    	for(i=0;i<apps_list.length;i++){
			if(go_value == apps_list[i]){
				$("html,body").animate({scrollTop: $(".app-"+apps_list[i]).offset().top});
			}
		}
		closecontainer();
		go_value = '';
		return false;
	};

	function closecontainer(){
			$("#gotocontainer").slideUp("slow")
			$("#gotocontainer").data('closed',true)
			$("#go_input").val('')

	}

	$('html,body').jkey('shift+l',function(){
		window.location.href = '/admin/logout';
	});

	$(document).jkey('shift+g', function(){
		var closed = $('#gotocontainer').data().closed;
		if (closed){
			$("#gotocontainer").slideDown("slow")
			$("#gotocontainer").data('closed',false)
			$('#go_input').focus();
		}
		else{
			closecontainer();
		}
		
		$("#go_input").val('')

	});

	$(document).jkey('shift+/',function(){

		var closed = $('.shortcutsmap').data().closed;
		if (closed){
			$(".shortcutsmap").slideDown("slow")
			$(".shortcutsmap").data('closed',false)
		}

		else{
			$(".shortcutsmap").slideUp("slow")
			$(".shortcutsmap").data('closed',true)
		}
	});
	
	if($('#gotocontainer').data().closed == true){

		$('html,body').jkey('j',function(){
			$('html,body').animate({
				scrollTop: $(window).scrollTop() + 200
			});
		});
		
		$('html,body').jkey('k',function(){		
			$('html,body').animate({
				scrollTop: $(window).scrollTop() - 200
			});
		});	
	}
