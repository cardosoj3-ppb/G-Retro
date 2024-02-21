type headingprops = {
    children: string
}

export const Heading = (props: headingprops) => {
    return <h2>{props.children}</h2>
}