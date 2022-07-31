const LmdTime = () => {
  const lmdDate = new Date().toLocaleDateString();
  const lmdTimeString = new Date().toLocaleTimeString();
  return (
    <>
      <button className="lmdDeleteBtn">
        {lmdDate} {lmdTimeString}
      </button>
    </>
  );
};

export default LmdTime;
