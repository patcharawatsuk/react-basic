//กำหนดค่าที่อยู่ใน array หรือ object ให้กับตัวแปร
const colors = ["white", "red", "blue"];
//แบบดีั้งเดิม
const a = colors[0];
const b = colors[1];

//console.log(a, b);

//#region usage array
const [, , d] = colors; //เอาแค่ตัวที่ 1 ใส่ค่าว่างไว้
//console.log(d);
//#endregion

//#region usage object
const product = {
    productName : "Macbook",
    price : 40000,
    stock : 100
}
//console.log(product);

//แบบดีั้งเดิม
const pdName = product.productName;
//console.log(pdName);

//แบบ destructuring
const {productName : productName1, price: price1} = product; //productName ซ้ายคือ property ใน object ขวาคือ ตัวแปร
console.log(productName1, price1);
//#endregion