import { Hours } from "./Time";

type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: Boolean
}


export const Greet = (props: GreetProps) => {
    return(
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcome back, ${props.name}! You have ${props.messageCount} unread messages. ` : `Welcome Guest!`
                }
            </h2>
            <Hours/>
        </div>
    )
}