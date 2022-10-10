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
