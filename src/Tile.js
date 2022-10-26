export default function Tile(props) {
  let className = "rounded-sm h-fit min-h-[2.5rem] px-3 bg-yellow-200 transition-all duration-250 hover:bg-yellow-100";
  if (props.type === 'task') className += ' m-0.5 hover:shadow hover:my-1'

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}