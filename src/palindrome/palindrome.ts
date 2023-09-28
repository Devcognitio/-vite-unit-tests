
export const  isPalindrome = (str: string): boolean  => {
    const cleanedStr = str.replace(/\s/g, '').toLowerCase();
  
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    return cleanedStr === reversedStr;
}
