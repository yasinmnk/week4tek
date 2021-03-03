const phone=require('./data').phone;

let sonuc=phone.filter(item=>((item.marka=='samsung'||'apple'||'xiaomi'||'huwaei')&&item.bataryaKap=='4000mah'));

console.log(sonuc);