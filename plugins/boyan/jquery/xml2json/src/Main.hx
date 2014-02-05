package ;

/**
 * ...
 * @author AS3Boyan
 */
class Main
{
	public static var name:String = "boyan.jquery.xml2json";
	public static var dependencies:Array<String> = ["boyan.jquery.script"];
	
	//If this plugin is selected as active in HIDE, then HIDE will call this function once on load	
	public static function main():Void
	{
		//Run-time jQuery loading
		//This line is equivalent to adding <script type="text/javascript" src="../plugins/boyan/jquery/bin/includes/js/jquery/jquery-2.0.3.min.js"></script> to bin/index.html head element
		HIDE.loadJS(name, ["bin/includes/js/jquery.xml2json.js"], function ():Void
		{
			//Notify HIDE that plugin is ready for use, so plugins that depend on this plugin(like Bootstrap) can start load themselves
			HIDE.notifyLoadingComplete(name);
		});
		
		//Alternative way of loading
		//You can specify path relative to bin/index.html
		//HIDE.loadJS(null, ["../plugins/boyan/jquery/script/bin/includes/js/jquery/jquery-2.0.3.min.js"]);
	}
	
}