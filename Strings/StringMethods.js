let s="hello";

//? length() :-
console.log(s.length);

//? 1) toUpperCase() :-
//! it will convert all the characters of the string to uppercase.
//! it will not change the original string.
console.log(s.toUpperCase());

//? 2) toLowerCase() :-
//! it will convert all the characters of the string to lowercase.
//! it will change the original string.

let s1="HELLO";
console.log(s.toLowerCase());
console.log(s1);

//? 3) startsWith():-
//! it will check whether the string starts with the given substring or not.
//! if it starts with given substring or character the it will print true or else false.
console.log(s.startsWith("he")); // true
console.log(s.startsWith("f"));   //false

//? 4) endsWith():-
//! it will check whether the string ends with the given substring or not.
//! if it ends with the given substring or character then it will print true or else false.
console.log(s.endsWith("lo")); // true
console.log(s.endsWith("f"));   //false

//? 5) indexOf() :-
//! it will return the index of the first occurrence of the given substring or character.
//! if the substring or character is not found then it will return -1.
console.log(s.indexOf("l")); //2
console.log(s.indexOf("z")); //-1

//? 6) lastIndexOf() :-
//! it will return the index of the last occurrence of the given substring or character.
//! if the substring or character is not found then it will return -1.
console.log(s.lastIndexOf("l")); //3
console.log(s.lastIndexOf("z")); //-1
console.log(s.lastIndexOf("o")); //4

//? 7) subString(starting index,ending index) :-
//! it will returnt the substring from the starting index to the ending index-1.
//! if the ending index is not given then it will return the substring from the starting index to the end of the string.
//! two arguments :- starting index and ending index.
//! It will not accept the negative indexes.
let s2= "hello";
console.log(s2.substring(2,5));  //ello

//? 8) slice(starting index,ending index) :-
//! it will return the substring from the starting index to the ending index-1.
//! It will accept the nagative values.
console.log(s2.slice(-5,-2));  //hell
console.log(s2.slice(-4));  //llo

//? 9)charAt(index) :-
//! it will return the character at the given index.
console.log(s.charAt(1));  //e
console.log(s.charAt(4));  //o

//? 10) charCodeAt(index) :--
//! it will return the ASCII value of the character at the given index.
//! it will return NaN if the index is out of range.
console.log(s.charCodeAt(0));  //104
console.log(s.charCodeAt(1));  //101
console.log(s.charCodeAt(8));  //NaN

//? 11) replace(old substring,new substring) :-
//! it will replace the old substring with the new substring.
//! it will only replace the first occurrence of the old substring.
//! it will not change the original string.
let s3="hello world";
console.log(s3.replace("ll","p"));  //heplo world
console.log(s3.replace("world","everyone"));  //hello everyone
console.log(s3);  //hello world

//? 12)replaceAll(old substring,new substring) :--
//! it will replace all the occurrences of the old substring with the new substring.
//! it will not change the original string.
console.log(s3.replaceAll("l","p"));  //heppo worpd
console.log(s3.replaceAll("o","d"));  //helld wdrld
console.log(s3);  //hello world

//? 13) repeat(n number of times) :-
//! It will repeat the string n number of times.
console.log(s.repeat(3));  //hellohellohello
console.log(s.repeat(5));  //hellohellohellohellohello

//? 14) includes("substring" or 'character') :-
//! it will check whether the string containes the given substring or character or not.
//! if  it is present then it will return true or else false.
console.log(s3.includes("world"));  //true
console.log(s3.includes("word"));  //false
console.log(s3.includes("o"));  //true

//? 15) split("separator") :-  ***********************very Importatnt***********************
//! it is used to split the string into an array of substrings based on the given separator.
//! if no separator is provided, the entire string is returned as a single element array.
//! if an empty string ('') is provided as the separator, the string is split into single characters.
console.log(s3.split()); //['hello world']
console.log(s3.split(''));  // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
console.log("js is javascript, js is a error language".split());  //['js is javascript, js is a error language']
console.log("js is javascript, js is a error language".split(' ')[0]); //['js', 'is', 'javascript,', 'js', 'is', 'a', 'error', 'language']
console.log("js is javascript, js is a error language".split('').length);  //40 letters

//! reverse a string
let s4="suppala srinivas";
console.log(s4.split('').reverse().join(''));

//? 16) trim() :-
//! it will remove the leading and trailing spaces from the string.
//! it will not change the original array
let s5="   hello   ";
console.log(s5.trim());  //hello
console.log(s5);  //   hello

s6 = 'js is javascript, js is a error language'
let d=[];
    for(let i=0;i<s6.split(' ').length;i++){
        d.push(s6.split(' ').reverse().join(''))
    }
console.log(d.join(' '))