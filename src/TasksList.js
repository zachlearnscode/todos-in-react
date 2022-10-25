export default function TaskList(props) {
  return (
    <ul className="p-0">
      {props.children.map((child, i) => (
        <li
          className="list-none"
          key={String(i)}
        >{child}</li>
      ))}
    </ul>
  )
}