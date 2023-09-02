type tableProps = {
  label: string;
  datasourse: any[];
  cols: any[];
};

export default function BATable(props: tableProps) {
  const { label, datasourse, cols } = props;
  return (
    <>
      <div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {cols.map((x, i) => (
                <th>{x.heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datasourse.map((row, i) => (
              <tr>
                {cols.map((col, ind) => (
                  <td>{col.type == "boolean"? row[col.key]?"Yes":"No":row[col.key] }</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
