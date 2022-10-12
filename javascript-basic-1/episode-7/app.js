let value;

const now = new Date();// şu anki zamanı almamızı sağlar

const date1 = new Date("10-27-2005 08:30:00")

const date2 = new Date("September 1993")

const date3 = new Date("10/27/2005")

value = date1;



// Ay , Yıl Gün Saat Dakika yazdırma
value = date1.getMonth()
value = date1.getDate()
value = date1.getDay()
value = date1.getHours();
value = date1.getSeconds();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds;



// tarih düzeltme
date1.setMonth(7);
date1.setDate(15)
date1.setFullYear(2005)
date1.setHours(2)
date1.setMinutes(30)
date1.setSeconds(42)

value = date1
console.log(value)