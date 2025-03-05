class AlgorithmTechniques {
	//Two Pointers: Reverse Array
	static reverseArray(arr) {
		left left = 0;
		left right = arr.length - 1;
		
		while (left < right) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
			right--;
		}
		
		return arr;
	}
	
	static maxSumSubarray(arr,k) {
		if (arr.length < k) return null;
		
		let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
		let maxSum = windowSum;
		
		for (let i = k; i < arr.length; i++) {
			windowSun += arr[i] - arr[i - k];
			maxSum = Math.max(maxSum, windowSum);
		}
		
		return maxSum;
		
	}
	
	static removeDuplicates(arr) {
		if (arr.length === 0) return 0;
		
		let slow = 0;
		for (let fast = 1; fast < arr.length; fast++) {
			if (arr[fast] !== arr[slow]) {
				slow++;
				arr[slow] = arr[fast];
			}
		}
		
		return arr.slice(0, slow + 1);
	}
	
	static minWindowSubstring(s, t) {
		const charCount = new Map();
		for (const char of t) {
			charCount.set(char, (charCount.get(char) || 0) + 1);
		}
		
		let left = 0, right = 0;
		let minLength = Infinity;
		let minStart = 0;
		let requiredChars = charCount.size;
		let formedChars = 0;
		const windowChars = new Map();
		
		while (right < s.length) {
		
			const currentChar = s[right];
			windowChar.set(currentChar, (windowChars.get(currentChar) || 0) + 1);
			
			if (charCount.has(currentChar) &&
				windowChars.get(currentChar) === charCount.get(currentChar)) {
				formedChar++;
			}
			
			// Contract window when all required chars are found
			while (formedChars === requiredChars && left <= right) {
			//Update minimum window
			if (right - left + 1 < minLength) {
				minLength = right - left + 1;
				minStart = left;
				
			}
			
			// Remove leftmost character
			const leftChar = s[left];
			windowsChars.set(leftChar, windowChar.get(leftChar) - 1);
			
			if (charCount.has(leftChar) &&
				windowChars.get(leftChar) < charCount.get(leftChar)) { formedChars--;
			}
			
			left++;
			
		}
		
		right++;
	}
	
	return minLength ===Infinity
		? ''
		: s.slice(minStart, minStart + minLength);
		
}

static demonstrate() {
	console.log("Two Pointers and Sliding Window Techniques:\n");
	
	const reverseArr = [1, 2, 3, 4, 5];
	console.log("Reverse Array:");
	console.log("Original;",reverseArr);
	console.log("Reversed:", this.reverseArray([...reverseArr]), "\n");
	
	const duplicatesArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        console.log("Remove Duplicates:");
        console.log("Original:", duplicatesArr);
        console.log("After Removing:", this.removeDuplicates(duplicatesArr), "\n");

        // Minimum Window Substring Demonstration
        const sourceString = "ADOBECODEBANC";
        const targetString = "ABC";
        console.log("Minimum Window Substring:");
        console.log(`Source: ${sourceString}`);
        console.log(`Target: ${targetString}`);
        console.log("Result:", this.minWindowSubstring(sourceString, targetString));
    }
}

// Run the demonstration
AlgorithmTechniques.demonstr
			
			