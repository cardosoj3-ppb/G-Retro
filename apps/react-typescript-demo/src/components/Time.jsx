export const Hours = () => {

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return(
        <div>
            <h1> {hours}:{minutes} </h1>
        </div>
    )
}