let name1 = 'sally';
let name2 = 'miranda';
let name3 = 'sophia';

let f = name1.length;
let t = name2.length;
let th = name3.length;

if (f > t && f > th) {
    console.log(`${name1} is the longest`);
} else if (f === t && f > th) {
    console.log(`${name1} and ${name2} have the longest names`)
} else if (f === t && f ===th) {
    console.log(`${name1} and ${name2} ${name3} have the longest names`)
} else if (t > f && t > th) {
    console.log(`${name2} is the longest`);
} else if (f < t && t === th) {
    console.log(`${name2} and ${name3} have the longest names`)
} else {
    console.log(`${name3} has the longest name`);
}