import NavItem from "./NavItem";

const CompareTable = ({ companies }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th>Company</th>
            <th>Type</th>
            <th>Best For</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <NavItem to={`/Companies/${item.id}`} label={item.name} />
                </td>
                <td>{item.type}</td>
                <td>{item.bestFor}</td>
                <td>{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
