$(document).ready(function(){
     $('input:radio[name="pages"]').change(function(){
        if($(this).val() == ('landing')) {
            //show
            $('#lp-title').fadeIn('slow');
            $('#lp-desc').fadeIn('slow');
            $('#lp-list').fadeIn('slow');
            //hide
            $('#prem-title').hide();
            $('#prem-plus-title').hide();
            $('#prem-plus-list').hide();
            $('#prem-list').hide();
            $('#prem-desc').hide();
            $('#prem-plus-desc').hide();
          
        } else if($(this).val() == ('premium')) {
            //show
            $('#prem-title').fadeIn('slow');
            $('#prem-desc').fadeIn('slow');
            $('#prem-list').fadeIn('slow');
            //hide
            $('#lp-title').hide();
            $('#lp-desc').hide();
            $('#lp-list').hide();
            $('#prem-plus-title').hide();
            $('#prem-plus-desc').hide();
            $('#prem-plus-list').hide();
        }
          else {
            //show
            $('#prem-plus-title').fadeIn('slow');
            $('#prem-plus-desc').fadeIn('slow');
            $('#prem-plus-list').fadeIn('slow');
            //hide
            $('#lp-title').hide();
            $('#lp-desc').hide();
            $('#lp-list').hide();
            $('#prem-title').hide();
            $('#prem-desc').hide();
            $('#prem-list').hide();
        }
     });                                                
  $('#prem-title').hide();
  $('#prem-desc').hide();
  $('#prem-list').hide();
  $('#prem-plus-title').hide();
  $('#prem-plus-desc').hide();
  $('#prem-plus-list').hide();
});


// Main Menu 1
function openView1() {
  document.getElementById ("main-menu-1").style.display ="flex";
  document.getElementById ("closeView1").style.display ="inline";
  document.getElementById ("openView1").style.display ="none";
}
				
function closeView1() {
  document.getElementById ("main-menu-1").style.display ="none";
  document.getElementById ("closeView1").style.display ="none";
  document.getElementById ("openView1").style.display ="inline";
}

// Main Menu 2
function openView2() {
  document.getElementById ("main-menu-2").style.display ="flex";
  document.getElementById ("closeView2").style.display ="inline";
  document.getElementById ("openView2").style.display ="none";
}
			
function closeView2() {
  document.getElementById ("main-menu-2").style.display ="none";
  document.getElementById ("closeView2").style.display ="none";
  document.getElementById ("openView2").style.display ="inline";
}

// Main Menu 3
function openView3() {
  document.getElementById ("main-menu-3").style.display ="flex";
  document.getElementById ("closeView3").style.display ="inline";
  document.getElementById ("openView3").style.display ="none";
}
				
function closeView3() {
  document.getElementById ("main-menu-3").style.display ="none";
  document.getElementById ("closeView3").style.display ="none";
  document.getElementById ("openView3").style.display ="inline";
}

// Main Menu 4
function openView4() {
  document.getElementById ("main-menu-4").style.display ="flex";
  document.getElementById ("closeView4").style.display ="inline";
  document.getElementById ("openView4").style.display ="none";
}
				
function closeView4() {
  document.getElementById ("main-menu-4").style.display ="none";
  document.getElementById ("closeView4").style.display ="none";
  document.getElementById ("openView4").style.display ="inline";
}

// Main Menu 5
function openView5() {
  document.getElementById ("main-menu-5").style.display ="flex";
  document.getElementById ("closeView5").style.display ="inline";
  document.getElementById ("openView-5").style.display ="none";
}
				
function closeView5() {
  document.getElementById ("main-menu-5").style.display ="none";
  document.getElementById ("closeView5").style.display ="none";
  document.getElementById ("openView5").style.display ="inline";
}
