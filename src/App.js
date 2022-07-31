import "./App.css";
import { useState } from "react";
import Todo from "./Components/Todo";
import Header from "./Components/Header";

function App() {
  const [lmdAddTask, lmdSetTask] = useState("");
  const [lmdTaskList, lmdSetList] = useState([]);
  const [lmdCount, lmdSetCount] = useState(0);

  //Function Add Dynamic Class
  const LmdClasses = () => {
    let lmdClass = "bg-";
    lmdClass += lmdCount === 0 ? "warning" : "primary";
    return lmdClass;
  };

  const lmdFiledData = (lmdAddTask) => {
    lmdSetTask(lmdAddTask);
  };

  const lmdListInput = () => {
    const lmdListIds = {
      id: new Date().getTime().toString(),
      name: lmdAddTask,
    };
    lmdSetList([...lmdTaskList, lmdListIds]);
  };

  //Delete Items Function

  const lmdDeleteItems = (index) => {
    const lmdUpdateItems = lmdTaskList.filter((curntEle) => {
      return curntEle.id !== index;
    });
    lmdSetList(lmdUpdateItems);
  };

  //Reset Count Function
  const lmdResetCount = () => {
    lmdSetCount(0);
  };

  return (
    <div className="App">
      <Header
        lmdResetHandler={lmdResetCount}
        lmdInputProps={lmdFiledData}
        lmdTaskProps={lmdListInput}
      />
      <span className={LmdClasses()}>Count {lmdCount}</span>
      <Todo
        lmdPropsInc={() => lmdSetCount(lmdCount + 1)}
        lmdPropsDec={() => lmdSetCount(lmdCount - 1)}
      />
      {lmdTaskList.map((curntEle) => {
        return (
          <div className="FieldOutPut">
            <span className="lmdInput" key={curntEle.id}>
              {curntEle.name}
            </span>
            <button
              className="lmdDeleteBtn"
              onClick={() => lmdDeleteItems(curntEle.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
