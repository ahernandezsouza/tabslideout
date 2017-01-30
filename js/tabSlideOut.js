/*(function($) {
  Drupal.behaviors.stickynav = {
    breakpoint: 0,
    compensation: 0,
    originalPadding: 0,
    attach : function(context) {
      var selector = Drupal.settings.stickynav.selector;
      //only getting the first elmenet in the dom
      var $menu = $(selector).eq(0);
      if ($menu.length) {
        $menu.once('stickynav', function() {
          // Save original padding on top. 0 timeout to get correct padding.
          setTimeout(function() {
            Drupal.behaviors.stickynav.originalPadding = $('body').css('paddingTop');
          }, 0);
          Drupal.behaviors.stickynav.breakpoint = $menu.offset().top;
          //we need to compensate the element so that the content does not jump up.
          Drupal.behaviors.stickynav.compensation = $menu.outerHeight();
          $(window).scroll(function () {
            if ($(window).scrollTop() > Drupal.behaviors.stickynav.breakpoint) {
              $menu.addClass('stickynav-active');
              $('body').css('padding-top', Drupal.behaviors.stickynav.compensation);
            }
            else {
              $menu.removeClass('stickynav-active');
              $('body').css('padding-top', Drupal.behaviors.stickynav.originalPadding);
            }
          });
        });
      }
    }
  }
})(jQuery);




*/
(function ($) {
  Drupal.behaviors.tabslideout = {
    attach : function(context) {
      var selector = Drupal.settings.tabSlideOut.selector;
      $(selector).tabSlideOut({
      tabLocation: Drupal.settings.tabSlideOut.tabLocation, // left, right, top or bottom
      tabHandle: Drupal.settings.tabSlideOut.tabHandle, // JQuery selector for the tab, can use #
      speed: Drupal.settings.tabSlideOut.speed, // time to animate
      action: Drupal.settings.tabSlideOut.action,  // action which will open the panel, e.g. 'hover'
      offset: Drupal.settings.tabSlideOut.offset, // panel dist from top or left (bottom or right if offsetReverse is true)
      offsetReverse: Drupal.settings.tabSlideOut.offsetReverse, // if true, panel is aligned with right or bottom of window
      otherOffset: Drupal.settings.tabSlideOut.otherOffset, // if set, panel size is set to maintain this dist from bottom or right (top or left if offsetReverse)
      handleOffset: Drupal.settings.tabSlideOut.handleOffset, // e.g. '10px'. If null, detects panel border to align handle nicely
      handleOffsetReverse: Drupal.settings.tabSlideOut.handleOffsetReverse, // if true, handle aligned with right or bottom of panel
      bounceDistance: Drupal.settings.tabSlideOut.bounceDistance, // how far bounce event will move everything
      bounceTimes: Drupal.settings.tabSlideOut.bounceTimes, // how many bounces when 'bounce' is called
      positioning: Drupal.settings.tabSlideOut.positioning, // can also use absolute, so tabs move when window scrolls
      tabImage: Drupal.settings.tabSlideOut.tabImage, // optional image to show in the tab
      tabImageHeight: Drupal.settings.tabSlideOut.tabImageHeight, // optional IE8 and lower only, else autodetected size
      tabImageWidth: Drupal.settings.tabSlideOut.tabImageWidth, // optional IE8 and lower only, else autodetected size
      onLoadSlideOut: Drupal.settings.tabSlideOut.onLoadSlideOut, // slide out after DOM load
      clickScreenToClose: Drupal.settings.tabSlideOut.clickScreenToClose, // close tab when rest of screen clicked
      toggleButton: Drupal.settings.tabSlideOut.toggleButton, // not often used
      });
    }
  }
})(jQuery);
