const dic = new Dictionary();

dic.set('Jennifer', 'jennifer@ftc.edu.br', '73988125453');
dic.set('nicolau', 'nischolasshelby@gmail.com', '73988566567');
dic.set('alex', 'alexdurex@outlook.com', '73988908001');
dic.set('amanda', 'amandaprincess@gmail.com', '73988234148');
dic.set('iago', 'iagotchola@hotmail.com', '73988763439');
dic.set('Lucas', 'lukita@ftc.edu.br', '73988345678');
dic.set('Jorge', 'JorjãoDaRegulagem@gmail.com', '73988637645');

console.log(dic.get('Jorge'))
console.log(dic.keyValues());
let count= 0;

dic.forEach((k,v,t)=>{
    console.log(`${++count}`, `Nome:${k}, Email:${v}, Telefone:${t}`);
});