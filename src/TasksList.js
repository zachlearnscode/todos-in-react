export default function TaskList(props) {
  return (
    <ul className="my-0 pl-0">
      {props.children.map((child, i) => (
        <li
          className="list-none bg-sky-100"
          key={String(i)}
        >{child}</li>
      ))}
    </ul>
  )
}