const data = [10,20,30,40,50];
//console.log(data.slice(1,3));

//#region find
const find = data.find(function(e){
    return e === 60
})
//console.log(find);
//#endregion

//#region map //->ได้ความยาวของ arr เท่า arr ต้นแบบ
const mapArr = data.map(e => e*2);
//console.log(data.map(d => 100));
//console.log(data);
//console.log(mapArr);
//#endregion

//#region filter
const filterArr = data.filter(e => e > 30);
//console.log(filterArr);
//#endregion

//#region filter2
const employee = [
    {name:"Apple", salary:25000, department:"Programmer"},
    {name:"Boros", salary:35000, department:"Specialist"},
    {name:"Cee", salary:15000, department:"Senior Engineer"},
    {name:"Daizo", salary:45000, department:"Manager"},
    {name:"Saitama", salary:55000, department:"Specialist"},
]


const employee_filter = employee.filter(e => e.salary >= 35000).filter(e => e.department === 'Specialist');
//console.log(employee_filter);
//#endregion


//#region for of  -> for of
// for(const e of data){
//     console.log(e);
// }

//#endregion

//#region reduce คือการ return ข้อมูลชุดเดียว
const reduce = data.reduce((value, e) => {
    const total = e + value;
    return total;
}, 0); //value เก็บผลการคำนวน ซึ่งค่า init = 0
//console.log(reduce);

const cart = [
    {name: "กระเป๋า", price:500},
    {name: "Macbook", price:40000},
    {name: "camera", price:5000}
]
const totalPayment = cart.reduce((value, e) => value + e.price, 0);
//console.log(totalPayment);
//#endregion

//#region spread operator ->กระจายสมาชิกใน array
const arr = [100, 200, 300];
const data1 = [10, 20, ...arr];
console.log(data1);

const color1 = ["red", "green", "blue"];
const color2 = ["black", "white", ...color1];
color2.push(...["orange", "yellow"])
console.log(color2);
//#endregion