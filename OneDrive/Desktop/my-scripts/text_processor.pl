#!/usr/bin/perl

use strict;
use warnings;

my $text = "This is a sample text with some words and numbers like 888 and 999.";

# Split the text into words
my @words = split /\s_/, $text;

print "words in the text:\n";
foreach my $word (@words) {
	print "$word\n;
}

my @long_words = grep {length($_) > 4 } @words;

print "\nLong words:\n";
foreach my $word (@long_words) {
	print "$word\n";
}

