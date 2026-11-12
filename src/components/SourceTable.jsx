const SourceTable = ({ sources }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th>Source</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {sources.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SourceTable;
