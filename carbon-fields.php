<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
function crb_attach_theme_options() {
	Container::make( 'post_meta', 'Custom Data' )
	         ->where( 'post_type', '=', 'post' )
	         ->add_fields(
		         get_player_fields()
	         );
}

function get_player_fields(){
	$fields =[];
	foreach ( get_stats_headers() as $header ){
		$fields[] = Field::make( 'text', strtolower( $header ) )->set_visible_in_rest_api();
	}
	return $fields;
}
add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
	require_once( 'vendor/autoload.php' );
	\Carbon_Fields\Carbon_Fields::boot();
}