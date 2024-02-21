import { Hours } from "./Time";

type GreetProps = {
    name: string
}


export const Greet = (props: GreetProps) => {
    return(
        <div>
            <h2>Welcome back, {props.name}!</h2>
            <Hours/>
        </div>
    )
}