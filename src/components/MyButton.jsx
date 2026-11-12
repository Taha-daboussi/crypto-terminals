const MyButton = ({ style, onclick, label }) => {
  return (
    <button className={style} onClick={onclick}>
      {label}
    </button>
  );
};

export default MyButton;
