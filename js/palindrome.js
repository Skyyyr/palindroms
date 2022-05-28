/**
 * @param {*} word This is the given string, or number that will be evaluated to be a palindrome, or not
 * @returns true or false
 */
exports.palindrome = function(word) {
    /*
        Before we do anything we need to find out if we are dealing with a number or string;
        If we are dealing with a number, we parse it to a string;
        If we are dealing with a string, we lower the cases for ease of comparison later on
    */
    word = typeof(word) === 'number' ? String(word) : word.toLowerCase();

    /**
     * @param reggy This is a Regex (Regular Expression) that will exclude anything that is not a lower case, or number;
     * (We don't need to check for upper because we lowered the case earlier)
     */
    const reggy = (/[^a-z0-9]/gi);

    // Now that our Regex is setup, and our given 'word' is now a string we can search for anything that isn't a letter, or number and replace it with ''
    word = word.replace(reggy, '');

    /**
     * @param leftIdx This is a stored pointer that we utilize to iterate over the given 'word' starting at the far most left index
     */
    let leftIdx = 0;

    /**
     * @param rightIdx This is our other pointer that we utilize to iterate over the given 'word' starting from the far most right index
     */
    let rightIdx = word.length - 1;

    // Now we can iterate over the given 'word' while our leftIdx value is less than our right
    while (leftIdx < rightIdx) {
        /**
         * @param leftChar This is our left index character that we will use to compare against the right character
         */
        const leftChar = word[leftIdx];

        /**
         * @param rightChar This is our right index character that is compared against the left character
         */
        const rightChar = word[rightIdx];

        // If these characters are not equal, then this is not a palindrome so return false
        if (leftChar !== rightChar) { return false }

        /*
            If we get here, then so far it's a palindrome,
            so increment our left value while decrementing our right value
            (moving them both to the next most inner characters)
        */
        leftIdx++;
        rightIdx--;
    }

    // We reached the end without return false so it must be true
    return true;
};
