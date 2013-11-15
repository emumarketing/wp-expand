jQuery(document).ready(function() {
  // Expand toggle
  jQuery('.expand').addClass('close');
  jQuery('.expand h3').append('<span class="handle"><i class="icon-chevron-right"></i></span>');
  
  jQuery('.expand h3').click(function() {
      var $this = jQuery(this).parent('.expand');
      var curHeight = jQuery($this).height();
      
    if (jQuery($this).hasClass('close')) {  
      autoHeight = jQuery($this).css('height', 'auto').height();
      jQuery($this).height(curHeight).stop().animate({height: autoHeight}, 400);
      jQuery('span.handle', $this).html('<i class="icon-chevron-down"></i>');
      jQuery($this).removeClass('close');
      // jQuery('.expand.close').css('opacity', '.1');

    }
    else {
      jQuery($this).height(curHeight).stop().animate({height: '51px'}, 300);
      jQuery('span.handle', $this).html('<i class="icon-chevron-right"></i>');
      jQuery($this).addClass('close');
      // jQuery('.expand.close').css('opacity', '1');
    }  
  });
});