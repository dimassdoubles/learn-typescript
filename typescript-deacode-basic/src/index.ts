type Temanku = {
    nama: string,
    isKampret: boolean,
    hutang: number,
    isJomblo?: boolean // tanda tanya artinya optional
}

let temanku: Temanku
temanku = {
    nama: "Bambang susanto",
    isKampret: false,
    hutang: 12000
}

let namaSaya: string = "Dea Afrizal"
let username: number = 123 
let isDead: boolean = false
    let pacarKamu: string[]
  pacarKamu = ["Fitria", "suci", "rahmadhani"]

let pacarMereka: (string | number)[] 
pacarMereka = ["Fitria", 12]

let pacarSaya = "ada lima bro"
// pacarSaya = 4  // 

let pacarDia: number | string
pacarDia = 5
pacarDia = "lima bro"

console.log({pacarKamu})
console.log(username) // output : 123
console.log({namaSaya}) // output : {namaSaya: 'Dea Afrizal'}
console.log({isDead}) // output : {isDead: false}
console.log({pacarDia})
console.log({temanku})

// function
function create(): string {
    return "Terima kasih telah dibuat"
}

function add(x: number, y: number): number {
    return x + y
}

// arrow function
const create2 = (): string => "hello world"

const result = add(12, 1)
console.log(result)

type Wanita = string;

let wanitaku: Wanita;
wanitaku = "Fitria Suci Rahmadhani";
console.log({wanitaku});

// union type
type Pria = number;
type Gender = Pria | Wanita;

let genderKesukaan: Gender;
genderKesukaan = "Wanita";

type Core = 2 | 4 | 8 | 16 | "dual core" | "quad ore" | "octa core"

interface Processor {
    brand: string;
    baseModel: string;
    modelName: string;
    clockSize: number;
    coreTotal: Core;
}

function createProcessor(processor: Processor) : void {
    console.log(`
        Terimakasih ${processor.brand}, Berhasil membuat processor dengan detail sebagai berikut:
        nama base model: ${processor.baseModel}
        nama model: ${processor.modelName}
        clock size: ${processor.clockSize}
    `)
}

let intelCoreTotal: Core = "dual core"

const intelCoreI5 = {
    brand: "Intel",
    baseModel: "Arm64",
    modelName: "Intel Core I5",
    clockSize: 3.2,
    turboBoost: true,
    coreTotal: intelCoreTotal
    
}

createProcessor(intelCoreI5)

interface Intel extends Processor {
    turboBoost: boolean;
}

interface Amd extends Processor {
    precisionBoost: boolean;    

}




