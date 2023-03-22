
type nameProps = {names: string[]}

export default function Greetings(props: nameProps) {
    return (
        <div>
            {props.names.map(name => {
                return (<div><h1>Hello {name}!</h1></div>)
            })}
        </div>
    )
}