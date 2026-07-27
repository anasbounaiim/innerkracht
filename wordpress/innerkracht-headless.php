<?php
/**
 * Plugin Name: Innerkracht Headless Content
 * Description: Editable services, testimonials and FAQs for the Nuxt frontend.
 * Version: 1.0.0
 */
if (!defined('ABSPATH')) exit;

add_action('init', function () {
  $types = [
    'service' => ['Aanbod', 'Begeleidingen', 'dashicons-heart'],
    'testimonial' => ['Ervaring', 'Ervaringen', 'dashicons-format-quote'],
    'faq' => ['Vraag', 'Veelgestelde vragen', 'dashicons-editor-help']
  ];
  foreach ($types as $slug => [$single, $plural, $icon]) {
    register_post_type($slug, [
      'labels' => ['name'=>$plural, 'singular_name'=>$single, 'add_new_item'=>"Nieuwe $single toevoegen", 'edit_item'=>"$single bewerken"],
      'public' => true, 'show_in_rest' => true, 'menu_icon' => $icon,
      'supports' => ['title','editor','excerpt','thumbnail','page-attributes','custom-fields'],
      'rewrite' => ['slug' => $slug === 'service' ? 'aanbod' : $slug]
    ]);
  }
});

add_action('rest_api_init', function () {
  $fields = [
    'service' => ['short_summary','audience','recognisable_issues','benefits','process_steps','practical_information','price_text','cta_label','cta_url','featured','visible'],
    'testimonial' => ['client_display_name','related_service','featured','visible'],
    'faq' => ['related_page','category','visible']
  ];
  foreach ($fields as $type => $keys) foreach ($keys as $key) {
    register_post_meta($type, $key, [
      'show_in_rest' => true, 'single' => true,
      'type' => in_array($key, ['featured','visible'], true) ? 'boolean' : 'string',
      'auth_callback' => fn() => current_user_can('edit_posts'),
      'sanitize_callback' => in_array($key, ['cta_url'], true) ? 'esc_url_raw' : 'sanitize_textarea_field'
    ]);
  }
});

add_action('after_setup_theme', fn() => add_theme_support('post-thumbnails'));
