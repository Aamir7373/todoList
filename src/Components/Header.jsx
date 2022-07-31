import Time from "./Time";

const LmdHeader = (props) => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <h2>Lampdo</h2>
          <ul className="lmd-nav-inner">
            <li>
              <input
                type="text"
                placeholder="Add Task"
                className="lmdInput"
                onChange={(e) => props.lmdInputProps(e.target.value)}
              />
            </li>
            <li>
              <button className="lmd-btn" onClick={() => props.lmdTaskProps()}>
                Add Task
              </button>
            </li>
            <li>
              <button
                className="lmdDeleteBtn"
                onClick={() => props.lmdResetHandler()}
              >
                Reset Task
              </button>
            </li>
          </ul>
        </div>
        <div className="lmdTime">
          <Time />
        </div>
      </div>
    </>
  );
};

export default LmdHeader;
