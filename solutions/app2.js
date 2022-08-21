/*
•	Fájl: solutions/app2.js
•	Függvény neve: countOfWorkingDays
•	Írj egy függvényt, amelynek a visszatérési értéke az adott évben 08. 31-ig eltelt munkanapok (hétfő-péntek) száma!
*/

const countOfWorkingDays = () => {
    let dateJan = new Date('2022-01-01');
    let dateAug = new Date('2022-08-31');
    let dateSolutions = dateAug.getTime() - dateJan.getTime();
    let days = dateSolutions.getDay(0, 1, 2, 3, 4);

    return days;
    }



export default countOfWorkingDays;
