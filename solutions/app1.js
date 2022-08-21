/*
•	Fájl: solutions/app1.js
•	Függvény neve: getSecondsOfThisYearUntilNow
•	Írj egy függvényt, amelynek a visszatérési értéke az adott év 01. 01-től 08. 31-ig eltelt másodperceinek a száma!
•	Kerekítést használj, amikor osztasz 1000-rel! (Math.round())
*/


const getSecondsOfThisYearUntilNow = () => {
let dateJan = new Date('2022-01-01');
let dateAug = new Date('2022-08-31');
let dateSolutions = dateAug.getTime() - dateJan.getTime() / 1000;
return Math.round(dateSolutions)
}


// export default getSecondsOfThisYearUntilNow;

export default getSecondsOfThisYearUntilNow;