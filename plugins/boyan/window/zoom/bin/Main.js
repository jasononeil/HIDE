(function () { "use strict";
var HxOverrides = function() { }
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
var Main = function() { }
Main.main = function() {
	HIDE.waitForDependentPluginsToBeLoaded(Main.$name,Main.dependencies,function() {
		var window = js.Node.require("nw.gui").Window.get();
		BootstrapMenu.getMenu("View").addMenuItem("Zoom In",2,function() {
			window.zoomLevel += 1;
		},"Ctrl-Shift-+",187,true,true,false);
		BootstrapMenu.getMenu("View").addMenuItem("Zoom Out",3,function() {
			window.zoomLevel -= 1;
		},"Ctrl-Shift--",189,true,true,false);
		BootstrapMenu.getMenu("View").addMenuItem("Reset",4,function() {
			window.zoomLevel = 0;
		},"Ctrl-Shift-0",48,true,true,false);
		HIDE.notifyLoadingComplete(Main.$name);
	});
}
var Std = function() { }
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
var js = {}
js.Node = function() { }
var module, setImmediate, clearImmediate;
js.Node.setTimeout = setTimeout;
js.Node.clearTimeout = clearTimeout;
js.Node.setInterval = setInterval;
js.Node.clearInterval = clearInterval;
js.Node.global = global;
js.Node.process = process;
js.Node.require = require;
js.Node.console = console;
js.Node.module = module;
js.Node.stringify = JSON.stringify;
js.Node.parse = JSON.parse;
var version = HxOverrides.substr(js.Node.process.version,1,null).split(".").map(Std.parseInt);
if(version[0] > 0 || version[1] >= 9) {
	js.Node.setImmediate = setImmediate;
	js.Node.clearImmediate = clearImmediate;
}
Main.$name = "boyan.window.zoom";
Main.dependencies = ["boyan.bootstrap.menu"];
Main.main();
})();

//@ sourceMappingURL=Main.js.map