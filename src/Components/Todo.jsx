const LmdTodo = (props) => {
  return (
    <>
      <button className="lmd-plus" onClick={() => props.lmdPropsInc()}>
        <i className="fa fa-plus"></i>
      </button>

      <button className="lmd-plus" onClick={() => props.lmdPropsDec()}>
        <i className="fa fa-minus"></i>
      </button>
    </>
  );
};

export default LmdTodo;
