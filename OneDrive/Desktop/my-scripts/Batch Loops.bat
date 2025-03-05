@echo off
echo Conditional Execution Script

set /p "number=Enter a number: "

if %number% gtr 0 (
	echo The number is positive.
)	else if %number% lss 0 (
	echo The number is negative.
)	else (
	echo The number is zero.
)

echo Looping from 1 to 5...
for /l %%i (1,1,5) do (
	echo Number: %%i
)

echo Done!
pause