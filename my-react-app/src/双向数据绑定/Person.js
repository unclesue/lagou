const Person = (props) => {
  return <input type="text" value={props.name} onChange={props.changed} />;
};

export default Person;
