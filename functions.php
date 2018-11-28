<?php
include ('stats.php');
add_action( 'wp_enqueue_scripts', 'twentyseventeen_parent_theme_enqueue_styles' );

function twentyseventeen_parent_theme_enqueue_styles() {
	wp_enqueue_style( 'twentyseventeen-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'nba-style',
		get_stylesheet_directory_uri() . '/style.css',
		array( 'twentyseventeen-style' )
	);
	wp_enqueue_script( 'react', get_stylesheet_directory_uri() . '/dist/main.js', [], '1', true );

}

add_action( 'rest_api_init', function () {

	register_rest_route( 'wnba/v1', 'stats', array(

		'methods'  => 'GET',
		'callback' => 'get_stats'

	) );
} );

function get_stats( $request ) {
	$params = $request->get_params();

	return get_data( $params['cat'] );
}

function get_data( $cat ) {
	if ( 'PTS' == $cat ) {
		return get_pts_data();
	}
	if ( 'REB' == $cat ) {
		return get_reb_data();
	}
	if ( 'AST' == $cat ) {
		return get_ast_data();
	}
}

