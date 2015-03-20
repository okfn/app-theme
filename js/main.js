(function($) {
  // disable ribbon clickthrough
  if ( $(document).width() > 767) { 
    $('.navbar .open-knowledge').click(function(e) {e.preventDefault();
  }); }
  
  // default class
  $('.navbar .open-knowledge').addClass('collapsed');
  
})(jQuery);
