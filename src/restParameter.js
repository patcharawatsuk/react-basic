//คือการ ส่งพารามิเตอร์ไม่จำกัดจำนวน
const summation = (...numberArr) => {
    let total = 0;
    for(const e of numberArr) {
        total += e
    }
    return total;
}

console.log(summation(50, 100, 50, 50, 50, 1000));