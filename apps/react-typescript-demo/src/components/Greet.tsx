import { Hours } from "./Time";

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: Boolean
}


export const Greet = (props: GreetProps) => {

    const {messageCount = 0 } = props

    return(
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcome back, ${props.name}! You have ${messageCount} unread messages. ` : `Welcome Guest!`
                }
            </h2>
            <Hours/>
        </div>
    )
}