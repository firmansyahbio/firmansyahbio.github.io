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
  document.getElementById ("main-menu-1").style.display ="block";
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
  document.getElementById ("main-menu-2").style.display ="block";
  document.getElementById ("closeView2").style.display ="inline";
  document.getElementById ("openView2").style.display ="none";
}
				
function closeView2() {
  document.getElementById ("main-menu-2").style.display ="none";
  document.getElementById ("closeView2").style.display ="none";
  document.getElementById ("openView2").style.display ="inline";
}
