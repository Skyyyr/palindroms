import re

def palindrome(word):
    """When given a string or number, we check if it's a palindrome or not and return true/false respectively

    Args:
        word (string or number): This is the given string or number that will be evaluated

    Returns:
        boolean: Is this is a palindrome?
    """

    # We want to know if we are dealing with a string, or a number; If string lower otherwise parse to string
    word = word.lower() if type(word) is str else str(word)
    
    # Now that we have our word variable setup, we can now replace all characters within the word variable that don't belong
    word = re.sub('[^a-z0-9]', '', word)
    
    # This is our left pointer that we use while iterating over the given word variable
    leftIdx = 0
    
    # This is our right pointer that we use while iterating over the given variable
    rightIdx = len(word) - 1
    
    # Now we are ready to iterate over the potential palindrome
    while leftIdx < rightIdx:
        # Are these characters equal?
        if word[leftIdx] != word[rightIdx]:
            # No they are not so stop iterating and return false
            return False
        # So far this word variable is a potential palindrome; Increment/Decrement and continue to iterate
        leftIdx += 1
        rightIdx -= 1
    # We've reached this point without returning false so it must be true
    return True