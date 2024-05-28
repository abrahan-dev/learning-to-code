<?php
	/*
	Plugin Name: ASF: Add and Show Fields
	Plugin URI: http://abrahammesa.com/
	Description: Plugin display fields from a Data base, creating layouts.
	Version: 1.0
	Author: Abraham Mesa Mesa	
	Author URI: http://abrahammesa.com/
	License: GPL2
	
	Copyright 2013 Abraham Mesa Mesa  (email : abraham.mesa.mesa@gmail.com)

	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License, version 2, as 
	published by the Free Software Foundation.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
	*/

	function asf_install(){
	    global $wpdb;
	    
	    $t3 = $wpdb->prefix."asf_shortcode";
	    $t2 = $wpdb->prefix."asf_connection";
	    $t4 = $wpdb->prefix."asf_field";

	    $structure = "DROP TABLE $t4;";
	    $wpdb->query($structure);
	    $structure = "DROP TABLE $t2;";
	    $wpdb->query($structure);
	    $structure = "DROP TABLE $t3;";
	    $wpdb->query($structure);

	    $structure = "CREATE TABLE $t3 (
					ID INT NOT NULL AUTO_INCREMENT,
					SHORTCODE VARCHAR(100) NOT NULL,
					PRIMARY KEY PK (ID) );";
	    $wpdb->query($structure);    	    	    		 	    
	    
	    $structure = "CREATE TABLE $t2 (
					ID INT NOT NULL AUTO_INCREMENT,
					SERVER VARCHAR(100) NOT NULL,
					DB VARCHAR(100) NOT NULL,
					USER VARCHAR(100) NOT NULL,
					PW VARCHAR(100) NOT NULL,
					QUERY VARCHAR(500),
					TABL VARCHAR(50) NOT NULL,
					PRIMARY KEY PK (ID),
					CONSTRAINT SOURCE UNIQUE (SERVER,DB,USER,PW,QUERY) );";
	    $wpdb->query($structure);	    		 		 		 		 	    
	    	    
	    $structure = "CREATE TABLE $t4 (
					CODE INT NOT NULL AUTO_INCREMENT,	
					FIELD VARCHAR(100) NOT NULL, 								
					HIDDEN BOOLEAN,
					WEBTYPE VARCHAR(100) NOT NULL,
					SOURCE INT NOT NULL,
					SHORTCODE INT NOT NULL,
					PRIMARY KEY PK (CODE),
					FOREIGN KEY (SOURCE) REFERENCES $t2 (ID),
					FOREIGN KEY (SHORTCODE) REFERENCES $t3 (ID) );";
	    $wpdb->query($structure);	 
	}

	function asf_menu()
	{    
	    include 'asf-admin.php';	    
	}

	function asf_admin_actions()
	{
	    add_options_page("ASFmenu", "ASFmenu", "manage_options", "ASFmenu", "asf_menu");
	}

	function asf_func($atts) {
		global $wpdb;	

		extract(shortcode_atts( array(
			'query' => 'data reference',
			'size' => 'quantity of users',
			'layout' => 'display',				
			//'id' => 'whatever',
		), $atts ) );
		//echo "<br>ATTS:<BR>QUERY:" . $query . " SIZE:" . $size . " LAYOUT:" . $layout;		

		$wp_asf_connection = $wpdb->prefix."asf_connection";		
		$wp_asf_field = $wpdb->prefix."asf_field";
		$connectData = $wpdb->get_row("select * from $wp_asf_connection where ID=(select distinct source from $wp_asf_field where shortcode='$query');");		
		$connection = mysql_connect($connectData->SERVER, $connectData->USER, $connectData->PW) or die ("<br>connection aborted<br>");
		$selected_db = mysql_select_db($connectData->DB, $connection);

		//defining size limits and query
		if($size != "w") {			
			$qua = substr($size, 1+strrpos($size, '-')); 
			if($qua==null) $max=10;
			$start = substr($size, 0, strrpos($size, '-')); 
			if($start==null || $start<0) $start=0;			
			$command=$connectData->QUERY . " LIMIT $start,$qua";	
		}else {
			$command=$connectData->QUERY;
		}
		//echo "<br>command:<BR>" . $command;
		$result = mysql_query($command, $connection);

		//Conectar a wp
		$wpdb->db_connect();

		//depending on the layout, display the information.
		echo "<div class='asf-content'>";
		
		switch($layout) {
			case "names-list":
				while ($row = mysql_fetch_array($result, MYSQL_NUM)) {	
					echo "<div class='asf-names-list'>";
					echo "<blockquote class='asf-bq'>".$row[0]." ".$row[1]."<p class='asf-p'>".$row[2]."</p></blockquote>";
					echo "</div>";	      				
				}
				break;
			case "thumb": //[asf query="2" size="0-10" layout="thumb"]
				while ($row = mysql_fetch_array($result, MYSQL_NUM)) {	
					echo "<div class='asf-thumb'>";
					echo "<img src='".$row[0]."' alt='asf-thumb' width='200px'>";
					echo "<p class='asf-p-thumb'>".$row[1]." ".$row[2]."</p>";
					echo "</div>";	 
				}
				break;
		}	
		echo "</div>";	
	}

	function carga_estilos_asf()
	{
	  wp_register_style('asf-styles',plugins_url( '/asf-styles.css', __FILE__ ),array(),'1.1','all');
	  wp_enqueue_style('asf-styles');
	}

	add_action('wp_enqueue_scripts', 'carga_estilos_asf');

	add_shortcode('asf', 'asf_func');

	add_action('activate_asf/asfs.php', 'asf_install');
	add_action('admin_menu', 'asf_admin_actions');


?>
