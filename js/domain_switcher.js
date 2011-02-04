//$Id$
Drupal.behaviors.domain_switcher = function(context) {
  $('select#domain-dd').change(function() {
    window.location = $(this).val();
  });
}
