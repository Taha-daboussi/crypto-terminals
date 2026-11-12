const EmptyRow = ({ text }) => {
  return (
    <tr>
      <td colSpan="4" className="px-4 py-12 text-center text-slate-500">
        {text}
      </td>
    </tr>
  );
};

export default EmptyRow;
