import {LaunchList} from "./launchList";
import {Map} from "./map";
import {useEffect, useState, useRef} from "react";
import {SpaceX} from "../api/spacex";

function App(){

    const mainRef = useRef(null);
    const [launches, setLaunches] = useState([]);
    const [launchPads, setLaunchPads] = useState({
        "type":"FeatureCollection",
        "features":[] 
    });
    const spacex = new SpaceX();
    useEffect(()=>{
        spacex.launches().then(data =>{
            setLaunches(data)
        });
    },[]);
    useEffect(()=>{
        spacex.launchpads(true).then(data =>{
            setLaunchPads(data);
        });
    },[]);

    return(
        <main className='main' ref={mainRef}>
            <LaunchList launches = {launches} mainRef = {mainRef}/>
            <Map launchPads = {launchPads}/>
        </main>
    )
}

export {App};
