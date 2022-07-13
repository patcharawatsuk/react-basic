//import logo from "./logo.svg";
import React, { useEffect, useState } from 'react';
import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import { v4 as uuidv4 } from 'uuid';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//           Donut Test
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {

  const design = {color:'red', textAlign:'center', fontSize:'1.5rem'};
  //const Title = () => <h1 style={design}>บัญชีรายรับ - รายจ่าย</h1>;
  //const Desc = () => <p>บันทึกข้อมูลบัญชีแต่ละวัน</p>;

  const initData = [
    {id:uuidv4(), title:"ค่าเช่า", amount:-8000},
    {id:uuidv4() ,title:"ค่าน้ำมัน", amount:1000},
    {id:uuidv4() ,title:"ค่าหอ", amount:-4000},
    {id:uuidv4() ,title:"เงินเดือน", amount:9000}
  ]

  //สร้าง app state
  const [items, setItems] = useState(initData);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  useEffect(() => {
    const amount = items.map(e => e.amount);
    const income = amount.filter(e => e > 0).reduce((value, e) => value+e, 0);
    const expense = amount.filter(e => e < 0).reduce((value, e) => value+e, 0)
    setReportIncome(income);
    setReportExpense(expense);
  }, [items]);

  //รับข้อมูลจาก Formcomponent
  const onAddNewItem = (newItem) => {
    //console.log("ข้อมูลที่ส่งมาจาก Form Component = ", newItem);
    setItems( (prevItem) => {
      return [newItem, ...prevItem];
    })
  }

  return (
    <DataContext.Provider value={
      {
        income : Math.abs(reportIncome),
        expense : Math.abs(reportExpense)
      }
    }>
      <div className="container">
          <ReportComponent />
          <h1 style={design}>บัญชีรายรับ - รายจ่าย</h1>
          <FormComponent onAddItem={onAddNewItem}/>
          <Transaction items={items} />
      </div>
    </DataContext.Provider>
  )
}

export default App;
