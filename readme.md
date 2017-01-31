Drupal Tabslideout Module
=========================

The Tabslideout module integrates the jquery.tabSlideOut.js plugin so that it can be used with panels.

The plug-in can be configured in several ways. You can see the instructions for the parameters here: [jquery.tabSlideOut.js](https://github.com/ahernandezsouza/jquery.tabSlideOut.js/edit/master/README.md), as well as the js for the libraries folder (sites/all/libraries/jquery.tabSlideOut.js).



To use the module:

1. Download the module under sites/all/modules.
2. Set the jquery.tabSlideOut.js file inside sites/libraries/tabslideout.
3. Install [Panels](https://drupal.org/project/panels).
4. Enable the tabslideout module.
5. Then create a Panel such as this example:

* CSS Properties:
Set any selector you want (you can set this in the configuration screen of slideout at /admin/config/user-interface/tabslideout.

* Body:
	<a class="handle">Left<i class="fa fa-icon fa-television"></i></a>
	<p>This panel doesn't close automatically when somewhere else is clicked.</p>
	<p>And it can be controlled from the buttons in the main window.</p>

You should see a Panel in the position you selected in the configuration screen.
