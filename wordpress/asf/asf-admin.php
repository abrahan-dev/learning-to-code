<?php
	//Display field type options
	function dropDownTypes($arg) {
		$name = $arg . "dropdown";
		echo "<select name='$name'>	
				  <option value='none'></option>	  
				  <option value='path'>path</option>
				  <option value='blob'>blob</option>
				  <option value='text'>text</option>
				</select>";
	}
	
	//Display layout type options
	function dropDownLayouts() {
		echo "<select name='layout'>	
		        <option value='none'></option>	
				  <option value='thumb'>thumb</option>		
    			  <option value='thumb-link'>thumb-link</option>	  
				  <option value='names-list'>names-list</option>
				  <option value='general-sheet'>general-sheet</option>
				  <option value='pdf-list'>pdf-list</option>				 
				</select>";
	}
	
	//Returns true if $ob(string) is found in $sub(array)
	function string_into_array($ob,$sub) {
		$res=false;
		foreach($sub as $s){
			if(trim($s)==trim($ob)){ 
				$res=true;
				break;
			}
		}
		return $res;
	}
	 
	//Creates one row of the result set obtained by the Select
	function fieldRow($cero,$one) {
		echo "<tr><td>$cero</td>";
		echo "<td><b>$one</b></td><td>";					
		dropDownTypes($cero);					
		$name = $cero . "hidden";
		echo "</td>";
		//echo "<td><input type='radio' name='$name' value='hidden'/>Hidden<br/>
		//	  <input type='radio' name='$name' value='visible'/>Visible</td>";
		echo "</tr>";		
	}
	
	//Instruccions OutPut	
	function instruccions() {
		echo "	<br><strong>INSTRUCCIONS:</strong><br>
			<br>First: Set the credentials of the database and write the name of the table 
				from which you will get the fields, then click 'TEST'.
			<br>Second: Write the query including the name of the fields, with no spaces between the field names and no semicolon ';' at the end. You can include a 'where' statement. Click 'TEST'.
			<br>Third: Set the type of each field, choose the layout and click 'SHORTCODE'. Include this code into your posts or pages.
			<br><br><strong>LAYOUTS:</strong><br><br>
			Thumb: one photo + two texts concats<br>
			Names-List: one name + one surname + another text<br>
			General-Sheet: one photo + one title + one text<br> 
			Pdf-list: one pdf + one title<br>
			Thumb-link: one photo + one title + one birthdate + one birthplace + one email + one telephone + one current job<br>";	
	}
?>	

<div id='message' class='updated fade'>
	ASF Plugin <strong>Please, fill the form below</strong>
</div>

<div class='wrap'>
	<h2>Add and Show Fields</h2>

<!-- ---------------------------------- PRIMERA PARTE: MUESTRA EL FORMULARIO ------------------------------------ -->

	<form name='fields' action='' method='post'>		
	<?php 
		global $wpdb;			
		$constants = @get_defined_constants();	
	
		$server = trim($_POST['asf_server']);
		$db = trim($_POST['asf_db']);
		$user = trim($_POST['asf_user']);
		$pw = trim($_POST['asf_pw']);
		$query = trim($_POST['asf_query']);
			
		if($server == null) {
			$server=$constants['DB_HOST'];
		}
		if($db == null) {
			$db = $constants['DB_NAME'];
		}
		if($user == null) {					
			$user = $constants['DB_USER'];
		}
		if($pw == null) {				
			$pw = $constants['DB_PASSWORD'];
		}

		echo "<br>Server:<br><input type='text' name='asf_server' value='$server'><br>
			  Data Base:<br><input type='text' name='asf_db' value='$db'><br>
			  User:<br><input type='text' name='asf_user' value='$user'><br>
			  PassWord:<br><input type='password' name='asf_pw' value='$pw'><br>
		     	  Query:<br><textarea name='asf_query' rows='5' cols='50'>$query</textarea><br><br>
			  <input type='submit' value='TEST'><br>";		    
		
		$where=false;	
		instruccions();		

		if($query != null) {			
			
			$selectlist=null;

			//Connecting to the remote database
			$connection = mysql_connect($server, $user, $pw) or die ("<br>Connection Aborted<br>");
			$select_db = mysql_select_db($db, $connection);			
			
			//Figuring out the table name
			if(strtoupper(substr($query,0,6)) != "SELECT"){
				$table = $query;
				$query = "SELECT * FROM $query";				
			}else {									
				$temp=$query;
				if(strpos($temp, 'WHERE', null)){
					$table=trim(strrchr(trim(strstr($temp, ' WHERE', true)), " "));
					$where=true;
				}elseif(strpos($temp, 'where', null)){
					$table=trim(strrchr(trim(strstr($temp, ' where', true)), " "));
					$where=true;
				}elseif(strpos($temp, 'Where', null)){
					$table=trim(strrchr(trim(strstr($temp, ' Where', true)), " "));
					$where=true;
				}else{
					$table = substr($query,strrpos($query, ' '));
				}						
				//Defining array of fields included into the select list			
				if(!strrpos($query, '*')){	
					$p1 = strpos($query,' ');
					$p2 = strpos($query,' ',$p1+1);				 	
				 	$fs = substr($query,$p1,($p2-$p1));
					$selectlist = explode(",",$fs);						 					 	
				}														
			}				
			
			//Creates list of fields from the query
			$fields = mysql_query("SHOW FIELDS FROM $table", $connection);  		
			if($connection == false or $select_db == false or $fields == false) {				
				echo "<br><br><p>Test result failed<p><br><br>";	
			}else {		
				echo "<br>";
				echo "Please, choose a layout: ";
				dropDownLayouts();					
				echo "<br>";
				echo "<br><table border='0'>";										
				while ($row = mysql_fetch_array($fields, MYSQL_NUM)){							
					if($selectlist!=null) {
						if(string_into_array($row[0],$selectlist)) {
							fieldRow($row[0],$row[1]);
						}					
					}else {
						fieldRow($row[0],$row[1]);
					}
				}				
				echo "</table><br><input type='submit' value='SHORTCODE'><br><br>";					
			}										
		}										
	?>
	</form>

<!-- ------------------------------------- SEGUNDA PARTE: CREAR SHORTCODES --------------------------------------- -->

<?php		
	global $wpdb;
	$sw=0;	

	//Conectar a wp
	$wpdb->db_connect();	
	
	//Looks for not empty fields at $_POST
	foreach($_POST as $field => $value){
		if(($field != 'asf_server' && $field != 'asf_db' && $field != 'asf_user' && $field != 'asf_pw' && $field != 'asf_query') && $value != "none") {   		   				$sw=1; 
			break; 		
		}			
	}			

	//Generates Shortcode and makes inserts at DataBase.
	if($sw==1) {
		$origin="";			
		$dbfield="";
		$webType="";
		$visibility="";
		$shortcode="";

		$layout=$_POST['layout'];

		$wp_asf_connection = $wpdb->prefix."asf_connection";
		$wp_asf_shortcode = $wpdb->prefix."asf_shortcode";
		$wp_asf_field = $wpdb->prefix."asf_field";
		
		//inserting connection and setting origin	
		$table=trim($table);		
		$wpdb->query("INSERT INTO $wp_asf_connection (SERVER,DB,USER,PW,QUERY,TABL) VALUES ('$server','$db','$user','$pw','$query','$table')");			
		$origin = $wpdb->get_var("SELECT ID FROM $wp_asf_connection WHERE SERVER='$server' and DB='$db' and USER='$user' and PW='$pw' and QUERY='$query'");
			
		//Genereting shortcode and inserting shortcode			
		$temp = $wpdb->get_var("SELECT MAX(ID) AS ID FROM $wp_asf_shortcode");

		if($temp==null){
			$num=1;
		}else {
			$num=$temp+1;	
		}

		if($where) {				
			$shortcode ="[asf query=\"" . $num . "\" size=\"w\" layout=\"" . $layout . "\"]";
		}else {
			$shortcode ="[asf query=\"" . $num . "\" size=\"0-10\" layout=\"" . $layout . "\"]";	
		}

		$wpdb->query("INSERT INTO $wp_asf_shortcode (SHORTCODE) VALUES ('$shortcode')");	
		
		foreach($_POST as $field => $value){
			if($position=strpos($field, "dropdown")){
				$dbfield=substr($field,0,$position);				
				$webType=$value;
				$wpdb->query("INSERT INTO $wp_asf_field (FIELD,HIDDEN,WEBTYPE,SOURCE,SHORTCODE) VALUES ('$dbfield', false, '$webType', '$origin', '$num')");
			}

		}
		echo "<br>This is your shortcode: <strong>" . $shortcode . "<strong>"; 				
	}
?>
</div>
