
export const  isPalindrome = (str: string): boolean  => {

    if(!str) {
        return false;
    }
    const cleanedStr = str.replace(/\s/g, '').toLowerCase();
  
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    return cleanedStr === reversedStr;
}

