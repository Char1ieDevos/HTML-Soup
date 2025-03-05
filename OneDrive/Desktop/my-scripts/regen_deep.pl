use strict;
use warnings;

my $text = "My email address is example@example.com and my phone number is 555-123-6969";

# Extract the email address
if ($text =~ /([w\.-]+@[\w\.-]+)/) {
	print "Email address: $1\n";
}

# Extract the email address
if ($text =~ /(\d{3}-\d{3}-\{d4})/) {
	print "Phone number: $1\n";
}