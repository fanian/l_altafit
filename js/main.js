
	jQuery(document).ready(function(){



			$(".modalbox").fancybox();
			
			$(".menu").css({"position":"absolute"});
			$(".menu").css({"top":"-1000px"});
			$(window).scroll(function(){	
				if ($(this).scrollTop()>395)
				{
					var pp = $(this).scrollTop()-395;
					$(".menu").css({"position":"fixed"});
					$(".menu").css({"top":"0"});
					
				}else{
					$(".menu").css({"position":"absolute"});
					$(".menu").css({"top":"-1000px"});
				}
			});
			
			
			$('.menu a.a1').click(function(){
				$.scrollTo('#point1', 1500, {offset: {top:-30} });
				return false;
			});
			
			$('.menu a.a2').click(function(){
				$.scrollTo('#point2', 1500, {offset: {top:-30} });
				return false;
			});
			
			$('.menu a.a3').click(function(){
				$.scrollTo('#point3', 1500, {offset: {top:-30} });
				return false;
			});
			
			$('.menu a.a4').click(function(){
				$.scrollTo('#point4', 1500, {offset: {top:-30} });
				return false;
			});
			
			$('.menu a.a5').click(function(){
				$.scrollTo('#point5', 1500, {offset: {top:-30} });
				return false;
			});
			
			$('.menu a.a6').click(function(){
				$.scrollTo('#point6', 1500, {offset: {top:-30} });
				return false;
			});
			
			$('.menu a.a7').click(function(){
				$.scrollTo('#point7', 1500, {offset: {top:-30} });
				return false;
			});
			
			$('a.anim').click(function(){
				$.scrollTo('#point8', 1500, {offset: {top:-60} });
				return false;
			});
			
			$('a.anim1').click(function(){
				$.scrollTo('#point9', 1500, {offset: {top:-60} });
				return false;
			});
			
			
			$("#ans1").addClass('active');
			
			$('.question a').click(function () {
				$('.question a').removeClass('active');
				$(this).addClass('active');
				$('.answer').removeClass('active');
				$('.block7 .right #ans'+$(this).attr('rel')).addClass('active');	
			});
			
			
			$("#contact1").submit(function() { return false; });

		
			$("#send1").on("click", function(){
				var err = false;
				
				var nameval  = $("#name1").val();
				var namelen    = nameval.length;
				var phoneval    = $("#phone1").val();
				var phonelen    = phoneval.length;
				var mailval    = $("#mail1").val();
				var maillen    = mailval.length;
				
								
				
				if ((namelen < 3)||(nameval=='')){
					$('.error1').css({"display":"block"});
					err = true;
				} else {
					$('.error1').css({"display":"none"});
				}
								
				if ((phonelen < 3)||(phoneval=='')){
					$('.error1').css({"display":"block"});
					err = true;
				} else {
					$('.error1').css({"display":"none"});
				}
				
				if ((maillen < 3)||(mailval=='')){
					$('.error1').css({"display":"block"});
					err = true;
				} else {
					$('.error1').css({"display":"none"});
				}
				
				
				if (!err) {
						
					$.ajax({
						type: 'POST',
						url: './js/sendmessage1.php',
						data: $("#contact1").serialize(),
						success: function(data) {
							if(data == "true") {
								$.fancybox.close();
                                $(".thanks-link")[0].click();
							}
						}
					});
				}	
			});
			
			
			$("#contact2").submit(function() { return false; });

		
			$("#send2").on("click", function(){
				var err = false;
				
				var nameval  = $("#name2").val();
				var namelen    = nameval.length;
				var phoneval    = $("#phone2").val();
				var phonelen    = phoneval.length;
				var mailval    = $("#mail2").val();
				var maillen    = mailval.length;
				var messval    = $("#mess2").val();
				var messlen    = messval.length;
				
								
				
				if ((namelen < 3)||(nameval=='')){
					$('.error2').css({"display":"block"});
					err = true;
				} else {
					$('.error2').css({"display":"none"});
				}
								
				if ((phonelen < 3)||(phoneval=='')){
					$('.error2').css({"display":"block"});
					err = true;
				} else {
					$('.error2').css({"display":"none"});
				}
				
				if ((maillen < 3)||(mailval=='')){
					$('.error2').css({"display":"block"});
					err = true;
				} else {
					$('.error2').css({"display":"none"});
				}
				
				if ((messlen < 3)||(messval=='')){
					$('.error2').css({"display":"block"});
					err = true;
				} else {
					$('.error2').css({"display":"none"});
				}
				
				
				if (!err) {
						
					$.ajax({
						type: 'POST',
						url: './js/sendmessage2.php',
						data: $("#contact2").serialize(),
						success: function(data) {
							if(data == "true") {
                                $.fancybox.close();
                                $(".tnx-link")[0].click();

                            }
						}
					});
				}	
			});
			
			
			$(window).scroll(function(){	
				if ($(this).scrollTop()>200)
				{
					$(".ex1").addClass('animated shake');
					
				}else{
					$(".ex1").removeClass('animated shake');
				}
			});
				
		    $(".ex2").hide();
			  $(window).scroll(function(){	
				if ($(this).scrollTop()>1100)
				{
					$(".ex2").show();
					$(".ex2").addClass('animated fadeInDown');
					
				}else{
					$(".ex2").hide();
					$(".ex2").removeClass('animated fadeInDown');
				}
			});
        $(".n1").hide();
        $(".n2").hide();
        $(window).scroll(function(){
            if ($(this).scrollTop()>400)
            {
                $(".n1").show();
                $(".n1").addClass('animated fadeInDown');
                setTimeout(function(){
                    $(".n2").show();
                    $(".n2").addClass('animated fadeInDown');
                },0);


            }else{
                $(".n1").hide();
                $(".n1").removeClass('animated fadeInDown');
                $(".n2").hide();
                $(".n2").removeClass('animated fadeInDown');

            }
        });
        $(".target_first").hide();
        $(window).scroll(function(){
            if ($(this).scrollTop()>800)
            {
                $(".target_first").show();
                $(".target_first").addClass('animated bounceIn');

            }else{
                $(".target_first").hide();
                $(".target_first").removeClass('animated bounceIn');
            }
        });

			
			$('a.anim').mouseover(function () {
				$('.m1').css({"background-image":"url('./images/bg6_1.png')"});
			});
			$('a.anim').mouseout(function () {
				$('.m1').css({"background-image":"url('./images/bg6.png')"});
			});
			
			$('a.anim1').mouseover(function () {
				$('.m2').css({"background-image":"url('./images/bg6_2.png')"});
				$('.m2').css({"background-position":"0 0"});
			});
			$('a.anim1').mouseout(function () {
				$('.m2').css({"background-image":"url('./images/bg6.png')"});
				$('.m2').css({"background-position":"0 -46px"});
			});
			
			$(".ex3").hide();
			 $(window).scroll(function(){	
				if ($(this).scrollTop()>1300)
				{
					$(".ex3").show();
					$(".ex3").addClass('animated fadeInDownBig');
					
				}else{
					$(".ex3").hide();
					$(".ex3").removeClass('animated fadeInDownBig');
				}
			});
			
			$(".ex33").hide();
			 $(window).scroll(function(){	
				if ($(this).scrollTop()>1400)
				{
					$(".ex33").show();
					$(".ex33").addClass('animated fadeInDownBig');
					
				}else{
					$(".ex33").hide();
					$(".ex33").removeClass('animated fadeInDownBig');
				}
			});
			
			$(".ex4").hide();
			 $(window).scroll(function(){	
				if ($(this).scrollTop()>2000)
				{
					$(".ex4").show();
					$(".ex4").addClass('animated fadeInDownBig');
					
				}else{
					$(".ex4").hide();
					$(".ex4").removeClass('animated fadeInDownBig');
				}
			});
			
			$(".ex44").hide();
			 $(window).scroll(function(){	
				if ($(this).scrollTop()>2100)
				{
					$(".ex44").show();
					$(".ex44").addClass('animated fadeInDownBig');
					
				}else{
					$(".ex44").hide();
					$(".ex44").removeClass('animated fadeInDownBig');
				}
			});
			
			$(".ex5").hide();
			  $(window).scroll(function(){	
				if ($(this).scrollTop()>2700)
				{
					$(".ex5").show();
					$(".ex5").addClass('animated fadeInDown');
					
				}else{
					$(".ex5").hide();
					$(".ex5").removeClass('animated fadeInDown');
				}
			});

        $(".target.t1").hide();
        $(".target.t2").hide();
        $(".target.t3").hide();
        $(window).scroll(function(){
            if ($(this).scrollTop()>3400)
            {
                $(".target.t1").show();

                $(".target.t1").addClass('animated bounceIn');
                $(".target.t2").show();

                $(".target.t2").addClass('animated bounceIn');
                $(".target.t3").show();

                $(".target.t3").addClass('animated bounceIn');

            }else{
                $(".target.t1").hide();
                $(".target.t1").removeClass('animated bounceIn');
                $(".target.t2").hide();
                $(".target.t2").removeClass('animated bounceIn');
                $(".target.t3").hide();
                $(".target.t3").removeClass('animated bounceIn');
            }
        });

			$(".ex6").hide();
			  $(window).scroll(function(){	
				if ($(this).scrollTop()>3600)
				{
					$(".ex6").show();
					$(".ex6").addClass('animated fadeInDown');
					
				}else{
					$(".ex6").hide();
					$(".ex6").removeClass('animated fadeInDown');
				}
			});
			
			$(".ex7").hide();
			  $(window).scroll(function(){	
				if ($(this).scrollTop()>4700)
				{
					$(".ex7").show();
					$(".ex7").addClass('animated fadeInDown');
					
				}else{
					$(".ex7").hide();
					$(".ex7").removeClass('animated fadeInDown');
				}
			});
			
			$(".ex8").hide();
			  $(window).scroll(function(){	
				if ($(this).scrollTop()>5400)
				{
					$(".ex8").show();
					$(".ex8").addClass('animated fadeInUp');
					
				}else{
					$(".ex8").hide();
					$(".ex8").removeClass('animated fadeInUp');
				}
			});
			
			$(".ex9").hide();
			  $(window).scroll(function(){	
				if ($(this).scrollTop()>5900)
				{
					$(".ex9").show();
					$(".ex9").addClass('animated zoomInUp');
					
				}else{
					$(".ex9").hide();
					$(".ex9").removeClass('animated zoomInUp');
				}
			});
			
			$(".ex10").hide();
			  $(window).scroll(function(){	
				if ($(this).scrollTop()>6700)
				{
					$(".ex10").show();
					$(".ex10").addClass('animated fadeInDown');
					
				}else{
					$(".ex10").hide();
					$(".ex10").removeClass('animated fadeInDown');
				}
			});
			
			$(".ex11").hide();
			  $(window).scroll(function(){	
				if ($(this).scrollTop()>7300)
				{
					$(".ex11").show();
					$(".ex11").addClass('animated fadeInDown');
					
				}else{
					$(".ex11").hide();
					$(".ex11").removeClass('animated fadeInDown');
				}
			});
			
			$(window).scroll(function(){	
				if ($(this).scrollTop()>2700)
				{
					$(".ex12").addClass('animated shake');
					
				}else{
					$(".ex12").removeClass('animated shake');
				}
			});
			
			$(window).scroll(function(){	
				if ($(this).scrollTop()>4600)
				{
					$(".ex13").addClass('animated shake');
					
				}else{
					$(".ex13").removeClass('animated shake');
				}
			});
			
			$(window).scroll(function(){	
				if ($(this).scrollTop()>7100)
				{
					$(".ex14").addClass('animated shake');
					
				}else{
					$(".ex14").removeClass('animated shake');
				}
			});


        (function ($) {
            // Counter

            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;

            var now = new Date();
            var timer;
            var startDay = 4;
            var start = new Date(2013, 1, startDay, 23, 59, 59);
            var distance = now - start;
            var day = Math.floor(distance / _day);
            day = day - Math.floor(day / 3) * 3;
            var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + day, 23, 59, 59);

            function showRemaining() {
                var now = new Date();
                now.setMinutes(1);
                var distance = end - now;
                var days = Math.floor(distance / _day);
                if (days < 10) days = '0' + days;
                var hours = Math.floor((distance % _day) / _hour);
                if (hours < 10) hours = '0' + hours;
                var minutes = Math.floor((distance % _hour) / _minute);
                if (minutes < 10) minutes = '0' + minutes;
                var seconds = Math.floor((distance % _minute) / _second);
                if (seconds < 10) seconds = '0' + seconds;

                $(".count_line .d").html(days);
                $(".count_line .h").html(hours);
                $(".count_line .m").html(minutes);
                $(".count_line .s").html(seconds);
            }
            showRemaining();
            timer = setInterval(showRemaining, 1000);

        })(jQuery);


        jQuery(function($){

            $("#phone1").mask("+7 (999)999-9999");
            $("#phone2").mask("+7 (999)999-9999");


        });
			
	});

