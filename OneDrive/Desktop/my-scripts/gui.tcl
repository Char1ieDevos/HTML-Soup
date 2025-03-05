package require Tk

#Create the main window
wm title . "Tcl/Tk GUI Example"

#Create a button
button .b -text "Click me!" -command {
	tk_messageBox -message "Button Clicked!" -type ok
}
pack.button

label .l -text "This is a label."
pack.l

tkwait window