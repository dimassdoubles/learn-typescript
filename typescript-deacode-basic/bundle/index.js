"use strict";
let temanku;
temanku = {
    nama: "Bambang susanto",
    isKampret: false,
    hutang: 12000
};
let namaSaya = "Dea Afrizal";
let username = 123;
let isDead = false;
let pacarKamu;
pacarKamu = ["Fitria", "suci", "rahmadhani"];
let pacarMereka;
pacarMereka = ["Fitria", 12];
let pacarSaya = "ada lima bro";
// pacarSaya = 4  // 
let pacarDia;
pacarDia = 5;
pacarDia = "lima bro";
console.log({ pacarKamu });
console.log(username); // output : 123
console.log({ namaSaya }); // output : {namaSaya: 'Dea Afrizal'}
console.log({ isDead }); // output : {isDead: false}
console.log({ pacarDia });
console.log({ temanku });
// function
function create() {
    return "Terima kasih telah dibuat";
}
function add(x, y) {
    return x + y;
}
// arrow function
const create2 = () => "hello world";
const result = add(12, 1);
console.log(result);
let wanitaku;
wanitaku = "Fitria Suci Rahmadhani";
console.log({ wanitaku });
let genderKesukaan;
genderKesukaan = "Wanita";
function createProcessor(processor) {
    console.log(`
        Terimakasih ${processor.brand}, Berhasil membuat processor dengan detail sebagai berikut:
        nama base model: ${processor.baseModel}
        nama model: ${processor.modelName}
        clock size: ${processor.clockSize}
        turbo boost: ${processor.turboBoost}
    `);
}
const intelCoreI5 = {
    brand: "Intel",
    baseModel: "Arm64",
    modelName: "Intel Core I5",
    clockSize: 3.2,
    turboBoost: true
};
createProcessor(intelCoreI5);
