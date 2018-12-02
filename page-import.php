<pre>
<?php
// add post_exists function

var_dump( get_pts_data() );
die();
if ( ! is_admin() ) {
	require_once( ABSPATH . 'wp-admin/includes/post.php' );
}
$players = (array ) get_data( 'PTS' );
//var_dump( $players );
//var_dump( $players['resultSets'][0]->headers );
$headers = $players['resultSets'][0]->headers;
foreach ( $players['resultSets'][0]->rowSet as $key => $player_stats ) {
	$player_name = $player_stats[3];
	// only import once
	if ( ! post_exists( $player_name ) ) {
		$post_id = wp_insert_post(
			[
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => $player_name
			]
		);
		echo $post_id;
		echo '<hr>';
		foreach ( $player_stats as $stat_key => $stat_value ) {
			update_post_meta( $post_id, '_' . strtolower( $headers[ $stat_key ] ), $stat_value );
			echo $headers[ strtolower( $stat_key ) ] . ' - ' . $stat_value;
			echo '<br>';
		}
		// ensure we got the fields
		var_dump( get_post_meta( $post_id ) );
	}

}