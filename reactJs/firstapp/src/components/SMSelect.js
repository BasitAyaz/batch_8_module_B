export default function SMSelect(props) {
  const { options, label, getValue } = props;

  let selectChange = (val) => {
    getValue(val);
  };

  return (
    <>
      <p>{label}</p>
      <select onChange={(e) => selectChange(e.target.value)}>
        {options &&
          Array.isArray(options) &&
          options.map((x, i) => (
            <option key={i} value={x.value}>
              {x.displayName}
            </option>
          ))}
      </select>
    </>
  );
}
