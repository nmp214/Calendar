//בניית מחלקה לאובייקטים שמכילים אות ומספרה בגימטריה
class Gimatria {
    sign;
    num;

    constructor(sign, num) {
        this.sign = sign;
        this.num = num;
    }
}
//הכנסת ערכי כל האותיות למערך
let letters = [];
letters[0] = new Gimatria('א', 1);
letters[1] = new Gimatria('ב', 2);
letters[2] = new Gimatria('ג', 3);
letters[3] = new Gimatria('ד', 4);
letters[4] = new Gimatria('ה', 5);
letters[5] = new Gimatria('ו', 6);
letters[6] = new Gimatria('ז', 7);
letters[7] = new Gimatria('ח', 8);
letters[8] = new Gimatria('ט', 9);
letters[9] = new Gimatria('י', 10);
letters[10] = new Gimatria('כ', 20);
letters[11] = new Gimatria('ל', 30);
letters[12] = new Gimatria('מ', 40);
letters[13] = new Gimatria('נ', 50);
letters[14] = new Gimatria('ס', 60);
letters[15] = new Gimatria('ע', 70);
letters[16] = new Gimatria('פ', 80);
letters[17] = new Gimatria('צ', 90);
letters[18] = new Gimatria('ק', 100);
letters[19] = new Gimatria('ר', 200);
letters[20] = new Gimatria('ש', 300);
letters[21] = new Gimatria('ת', 400);

//בניית מחלקת חודשים - כל אובייקט מכיל שם חודש ומספר ימים בו
class Month {
    name;
    days;

    constructor(name, days) {
        this.name = name;
        this.days = days;
    }
}


//קריאה ל-5 האותיות שמכילות את השנה
const year1 = document.getElementById('year1');
const year2 = document.getElementById('year2');
const year3 = document.getElementById('year3');
const year4 = document.getElementById('year4');
const year5 = document.getElementById('year5');

year1.value = 'ה';
year2.value = 'ת';
year3.value = 'ש';
year4.value = 'פ';
year5.value = 'ד';
//משתנה שמכיל את השנה הנוכחית
let year = 0;

//משתנה ששומר האם השנה מעוברת
let flag = false;

//מערך ימים
const days = ["", "ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
// 
const first = document.querySelector('#first');
const last = document.querySelector('#last');
let from, to;

let numDay;
const month = document.getElementById('month');

let months = [0, new Month("תשרי", 30), new Month("חשון", 29), new Month("כסליו", 30), new Month("טבת", 29), new Month("שבט", 30),
    new Month("אדר א", 30), new Month("אדר", 29), new Month("ניסן", 30), new Month("איר", 29), new Month("סיון", 30),
    new Month("תמוז", 29), new Month("אב", 30), new Month("אלול", 29),];
let fday, lday;
let remainder;
let numbersOfDays;
let dayInWeek;
const ans = document.getElementById('ans');


const selectMonth = document.getElementById('months');
const regularMonths = ["תשרי", "חשון", "כסליו", "טבת", "שבט", "אדר", "ניסן", "איר", "סיון", "תמוז", "אב", "אלול"];
const meubarMonths = ["תשרי", "חשון", "כסליו", "טבת", "שבט", "אדר א'", "אדר ב'", "ניסן", "איר", "סיון", "תמוז", "אב", "אלול"];

for (let index = 0; index < meubarMonths.length; index++) {
    selectMonth[index] = new Option(meubarMonths[index])
}

const day = document.getElementById('day');
const dates = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב", "יג", "יד", "טו", "טז", "יז", "יח", "יט", "כ", "כא", "כב", "כג", "כד", "כה", "כו", "כז", "כח", "כט", "ל"];

for (let index = 0; index < dates.length; index++) {
    day[index] = new Option(dates[index]);
}

//let firstOptions = new Option(regularMonths, undefined);
//('תשרי', 'חשון', 'כסליו', 'טבת', 'שבט', 'אדר', 'ניסן', 'איר', 'סיון', 'תמוז', 'אב', 'אלול');
//let meubarMonths = new Option('תשרי', 'חשון', 'כסליו', 'טבת', 'שבט', 'אדר א', 'אדר ב', 'ניסן', 'איר', 'סיון', 'תמוז', 'אב', 'אלול');


//let newOption = new Option('Option Text', 'Option Value');
//const select = document.querySelector('#select');

//פונקציות המתבצעות כאשר נכתבת אות ב"אינפוטים" של השנה. מתבצעת קריאה לפונקציה הבאה
year1.onkeyup = () => { selectYear() }
year2.onkeyup = () => { selectYear() }
year3.onkeyup = () => { selectYear() }
year4.onkeyup = () => { selectYear() }
year5.onkeyup = () => { selectYear() }

//הכנת מערך שיכיל את מערך החודשים בהתאם לשנה שנבחרה
// let selectedArr = [];

function selectYear() {
    //השנה ו"האם מעוברת" מתאפסים
    year = 0;
    flag = false;
    console.log('okay');
    for (let index = 0; index < letters.length; index++) {
        if (letters[index].sign === year1.value) {
            year += letters[index].num * 1000;
        }
        if (letters[index].sign === year2.value) {
            year += letters[index].num;
        }
        if (letters[index].sign === year3.value) {
            year += letters[index].num;
        }
        if (letters[index].sign === year4.value) {
            year += letters[index].num;
        }
        if (letters[index].sign === year5.value) {
            year += letters[index].num;
        }
    }
    //אם השארית היא אחת משבע אפשרויות, השנה היא מעוברת
    if (year % 19 === 0 || year % 19 === 3 || year % 19 === 6 || year % 19 === 8
        || year % 19 === 11 || year % 19 === 14 || year % 19 === 17) {
        flag = true;
    }
    //אם השנה מעוברת, נכנס למערך - מערך חודשי השנה המעוברת
    if (flag) {
        console.log(meubarMonths);
        for (let index = 0; index < meubarMonths.length; index++) {
            selectMonth[index] = new Option(meubarMonths[index])
        }
    }
    //אחרת- אם השנה רגילה, נכנס למערך - מערך חודשי השנה הרגילה
    else {
        console.log(regularMonths);
        for (let index = 0; index < regularMonths.length; index++) {
            selectMonth[index] = new Option(regularMonths[index])
        }
        //הוצאת האיבר האחרון מהאפשרויות, מכיוון שבשנה רגילה יש 12 חודשים ובמעוברת 13 חודשים, ואם כך חודש אלול נשאר כאן ואינו משתנה לחודש אחר ולכן צריך להוציאו
        if (selectMonth.length === 13)
            selectMonth.remove(selectMonth.options.length - 1);
    }
    //אם יש כבר חודשים באפשרויות וגם: יש חודש אדר א והשנה היא רגילה, או חודש אדר והשנה היא מעוברת, נמחקים כל החודשים מהאפשרויות
    if ((selectMonth.options.length != 0) && (selectMonth.options[5].value === "'אדר א" && flag === false || selectMonth.options[5].value === "אדר" && flag === true)) {
        for (let i = 0; i < selectMonth.length; i++) {
            selectMonth.remove(0);
        }
    }
    //אם אין שום חודשים באפשרויות, נכנס המערך שאליו הוכנסו לפני כן החודשים
    if (selectMonth.options.length === 0) {
        for (let i = 0; i < selectMonth.length; i++) {
            selectMonth.add(selectMonth[i]);
        }
    }

    console.log('year: ', year);
    console.log('flag: ', flag);
    for (let index = 0; index < selectMonth.length; index++) {
        console.log(selectMonth[index].value);
    }
}

selectMonth.onchange = () => {
    console.log('selectMonth changed');
    for (let index = 0; index < dates.length; index++) {
        day[index] = new Option(dates[index])
    }
    if (selectMonth.selectedIndex % 2 != 0) {
        console.log('day selected: ', day.selectMonth);
        day.remove(day.options.length - 1);
    }
}

ok.onclick = () => {
    for (let i = 1; i < dates.length; i++) {
        if (dates[i] === day.value) {
            numDay = i;
            break;
        }
    }
    for (let index = 0; index < days.length; index++) {
        if (first.value === days[index]) {
            from = index;
        }
        if (last.value === days[index]) {
            to = index;
        }
    }
    for (let index = 0; index < days.length; index++) {
        if (days[index] === first.value) {
            fday = index;
        }
        if (days[index] === last.value) {
            lday = index;
        }
    }
    remainder = (lday - fday + 7) % 7;

    if (remainder === 0) {
        numbersOfDays = 385;
        months[2].days = 30;
    }
    if (remainder === 3) {
        numbersOfDays = 353;
        months[3].days = 29;
    }
    if (remainder === 4) {
        numbersOfDays = 354;
    }
    if (remainder === 5) {
        if (flag) {
            numbersOfDays = 383;
            months[3].days = 29;
        }
        else {
            numbersOfDays = 355;
            months[2].days = 30;
        }
    }
    if (remainder === 6) {
        numbersOfDays = 384;
    }
    if (!flag) {
        months[6] = 0;
    }
    dayInWeek = fday;
    let i = 1;
    while (months[i].name != month.value) {

        if (months[i].days === 29) {
            dayInWeek += 1;
        }
        else {
            dayInWeek += 2;
        }
        i++;
    }
    dayInWeek += numDay - 1;
    dayInWeek = dayInWeek % 7;
    ans.innerHTML = days[dayInWeek];
}



console.log(calculateBirth(5739, 1));


function calculateBirth(year, month) {
    let days = 2, hours = 5, parts = 204;
    let normals = 0, leaps = 0;
    cyclesNumber = parseInt(year / 19);
    let ans = calculation(cyclesNumber, 2, 16, 595);
    days += ans.days;
    hours += ans.hours;
    parts += ans.parts;
    console.log('after change year: days- ', days, ', hours- ', hours, ', parts- ', parts);
    const leapsArr = [3, 6, 8, 11, 14, 17, 19];
    if (year % 19 != 0) {
        console.log('yes');
        for (let i = 1; i < year % 19; i++) {
            if (leapsArr.includes(i)) {
                leaps++;
            }
            else {
                normals++;
            }
        }
        console.log('normals: ', normals, ' leaps: ', leaps);
        ans = calculation(normals, 4, 8, 876);
        days += ans.days;
        hours += ans.hours;
        parts += ans.parts;
        console.log('after change normals: days- ', days, ', hours- ', hours, ', parts- ', parts);

        ans = calculation(leaps, 5, 21, 589);
        days += ans.days;
        hours += ans.hours;
        parts += ans.parts;

        console.log('after change leap: days- ', days, ', hours- ', hours, ', parts- ', parts);
    }

    ans = calculation(month - 1, 1, 12, 793);
    days += ans.days;
    hours += ans.hours;
    parts += ans.parts;
    console.log('after change monthes: days- ', days, ', hours- ', hours, ', parts- ', parts);

    ans = calculation(1, days, hours, parts);
    days = ans.days;
    hours = ans.hours;
    parts = ans.parts;
    if (days === 0)
        days = 7;
    console.log('after change all: days- ', days, ', hours- ', hours, ', parts- ', parts);

    return { days: days, hours: hours, parts: parts };
}

function calculation(number, startingDays, startingHours, startingParts) {
    let days = startingDays, hours = startingHours, parts = startingParts;
    let partsRemainder, hoursRemainder;
    days *= number;
    hours *= number;
    parts *= number;
    console.log('days: ', days, '\nhours: ', hours, '\nparts: ', parts);
    partsRemainder = parseInt(parts / 1080);
    console.log('partsRemainder: ', partsRemainder);
    parts = parts % 1080;
    console.log('parts: ', parts);
    hours += partsRemainder;
    console.log('hours: ', hours);
    hoursRemainder = parseInt(hours / 24);
    console.log('hoursRemainder: ', hoursRemainder);
    hours = hours % 24;
    console.log('hours: ', hours);
    days += hoursRemainder;
    console.log('days: ', days);
    days = days % 7;
    console.log('days: ', days);
    console.log('days: ', days, ' hours: ', hours, ' parts: ', parts);
    return { days: days, hours: hours, parts: parts }
}
