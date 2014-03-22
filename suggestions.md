* Autocompletion for hxml (including path for "-cp");
get list of haxelibs(using haxelib list) and provide autocompletion for "-lib |" command.
* Check how much plugins loaded, if only few, propose to recompile all plugins
* Move some elements from project options panel to new panel(somewhere in menu) or hide it(toggle visibility using some command)
* Try out Ext JS
* Use theming and tab management from hide-future
* Generate CSS and JS scripts embed code for folders
* Autoformat on change
* Autorebuild on change
* Remove Tern(reuse code from hide-future to manage completion and function parameters hints)
* Show history of recently opened/build hxmls
* Moved CSS of UI elements to theme.css, added command to open theme.css stylesheet to customize visual look of UI in HIDE itself(open theme.css file, and update visual look on file save, similar to hotkeys management).
* Options : Open templates folder
* Options : Open snippets configuration file
* Configure autoformat using config.json
* Hide panes when no project was opened(hide project options for hxml files)
* Code comments
* Show hotkeys for first times
* Show file state(changed or not) in tab title
* Store commands in Commands class
* Move basic menu commands to commands and add to menu in one class(automatically add to menu if menu is specified)
* Show compiler arguments bugs
* Generate new on "="
* Get function parameters and completion from cache
* Use hxparse for completion
* Rename HaxeClient to ProcessHelper
* If cursor is in class scope, then show completion for 
* Do not save file for completion(provided from haxeparser)
* Code snippets for functions(autocompletion)
* Rename file when class name changes
* Search for imports on some hotkey(auto import if possible)
* Show list of classes in completion(probably another hotkey)
* Check if package matches path
* Try haxe multiple tabs(join all files together, and then parse on open them)
* Show how much space take obsolete versions of haxelibs
* Open project
* Open project in new window
* Open html in new window
* Start webserver and open in new window
* Build hxml
* New file in same folder
* Move inlined CSS to theme.css
* Split HIDE core into multiple classes(ones for plugin loading and compiling);
* Localization
* Debounce function
* Add CodeMirror.Pos to definitions
* haxeparser: check mode before parsing
* Watch open files
* Use node js lib to walk througth folder
* Make parser walk througth source code
	* Haxe compiler std folder
	* Source code folders(-cp arguments)
	* Haxelibs folders
	
* Code completion for imports, full imports/classes list, completion for current class based on imports for current class, class modifiers, search for not imported classes and autoimport some of classes(show completion for multiple choices, notify user)

* Code snippets could be implemented in a same way you did with search addon

* CodeMirror: xmlcomplete, visibletabs, matchtabs, html5complete, closetags

* Generate imports
* Code generation
* Use Mustache for templates
* Replace create file functions with code from templates(create new templates)
* Code snippets
* settings.json for HIDE settings

* Parse code if error - exclude line and try again

* Fix splitpanes on Linux
* Fix first launch - open HIDE project as first project

###Important
* Fix for building *.hxml with -cmd arguments(test https://github.com/Justinfront/Jigsawx)
* Parse code with hxparse(classes on path)
* Fix window state preserving(Windows)
* Fix OpenFL projects(check webserver)
* Fix node-webkit haxelib(search for binary, handle no Internet connection exception)
* Fix tab saving issue
* Test file saving
* Unit tests
* Annotation ruler
* Trace function run count
* Watch theme.css for changes and apply to UI
* Split docs and rewrite
* Go to definition
* Show prompt to install missing haxelibs