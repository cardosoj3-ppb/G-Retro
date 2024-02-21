type oscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: oscarProps) => {
    return <h5> {props.children} </h5>
}