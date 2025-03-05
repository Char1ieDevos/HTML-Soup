@echo off
echo File Manager Script

echo Creating a new directory...
mkdir NewDirectory

echo Creating a new text file...
echo This is a new text file. > NewDirectory\newfile.txt

echo Copying the file...
copy NewDirectory\newfile.txt New Directory\copied_file.txt

echo Listing file in the directory...
dir NewDirectory

echo Deleting the directory...
rmdir /s /q NewDirectory

echo Done!
pause