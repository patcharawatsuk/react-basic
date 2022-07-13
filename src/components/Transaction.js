// import { useContext } from "react";
// import DataContext from "../data/DataContext";
import Item from "./Item";
import "./Transaction.css";

const Transaction = ({items}) => {
  //const name = useContext(DataContext);
    return (
      <div>
        <ul className="item-list">
          {
            //data.map(({title, amount}) => <Item title={title} amount={amount} />)
            items.map(e => <Item {...e} key={e.id}/>)
          }
        </ul>
        {/* <DataContext.Consumer>
          {value1 => <p>{value1}</p>}
        </DataContext.Consumer>  */}

      </div>
    );
  };

export default Transaction;