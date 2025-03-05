#!/bin/bash

current_dir=$(pwd)
echo "Current directory: $current_dir"

echo "Files and directories:"
ls -l

mkdir new_directory
echo "Created Directory: new_directory"

cd new_directory
echo "Moved to directory: $(pwd)"

touch new_file.txt
echo "Created file: new_file.txt"

cd ..
echo "Moved back to directory: $(pwd)"