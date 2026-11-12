import MyButton from "./MyButton";
import EmptyRow from "./EmptyRow";

const SuggestTable = ({ suggestions, ondelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Terminal</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.length === 0 ? (
            <EmptyRow text="No suggestions yet. Add the first one above." />
          ) : (
            suggestions.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.terminal}</td>
                  <td>{item.reason}</td>
                  <td>
                    <MyButton
                      style="btn btn-danger"
                      label="Delete"
                      onclick={() => ondelete(index)}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SuggestTable;
