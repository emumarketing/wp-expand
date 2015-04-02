<?php
/*
Plugin Name: Expand Button
Plugin URI: http://marketing.uoregon.edu
Description: TinyMCE Expand Button
Version: 1.0
Author: Joshua Rose
Author URI: http://marketing.uoregon.edu
*/

function add_expand_button() {
   // Don't bother doing this stuff if the current user lacks permissions
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
    return;

   // Add only in Rich Editor mode
   if ( get_user_option('rich_editing') == 'true') {
     add_filter("mce_external_plugins", "add_expand_tinymce_plugin");
     add_filter('mce_buttons', 'register_expand_button');
   }
}

function add_mce_style($mce_css) {
  if(!empty($mce_css))
    $mce_css .= ',';

  $mce_css .= plugins_url('editor.css', __FILE__);

  return $mce_css;
}

function register_expand_button($buttons) {
   array_push($buttons, "|", "expandbutton");
   return $buttons;
}

// Load the TinyMCE plugin : editor_plugin.js (wp2.5)
function add_expand_tinymce_plugin($plugin_array) {
   $plugin_array['expandbutton'] = plugins_url('editor_plugin.js', __FILE__);
   return $plugin_array;
}

function my_refresh_mce($ver) {
  $ver += 3;
  return $ver;
}


function register_extras() {
  wp_enqueue_style('expand-styles', plugins_url('expand.css',  __FILE__));
  wp_enqueue_script('expand-helper', plugins_url('expand.js', __FILE__), 'jquery');
}

// init process for button control
add_filter('tiny_mce_version', 'my_refresh_mce');
add_filter('mce_css', 'add_mce_style');
add_action('init', 'add_expand_button');
add_action('wp_enqueue_scripts', 'register_extras');
?>
