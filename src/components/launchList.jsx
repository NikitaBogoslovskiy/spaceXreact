import {changeColor} from "./map";

function LaunchList(props) {

    return (
        <aside className="aside" id="launchesContainer">
            <h3>Launches</h3>
            <div id="listContainer">


                <ul>
                    {props.launches.map(launch => {
                        return <li key={launch.id} onClick={() => changeColor(launch.launchpad)}>{launch.name}</li>
                    })}
                </ul>
            </div>
        </aside>
    )
}

export {LaunchList}