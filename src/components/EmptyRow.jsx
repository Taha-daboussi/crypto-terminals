const EmptyRow = ({ text }) => {
  return (
    <tr>
      <td colSpan="4" className="text-center">
        {text}
      </td>
    </tr>
  );
};

export default EmptyRow;
