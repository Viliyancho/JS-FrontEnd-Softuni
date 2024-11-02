function solve() {
    let buttonDepart = document.querySelector("#depart");
    let buttonArrive = document.querySelector("#arrive");
    let infoBar = document.querySelector("#info .info");

    let busStopInfo={
        name: "",
        next:"depot",
    };


    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStopInfo.next}`)
        .then(r=>r.json())
        .then(busStop=>{
            busStopInfo=busStop;
            buttonDepart.disabled=true;
            buttonArrive.disabled=false;
            infoBar.textContent=`Next stop ${busStopInfo.name}`;
        })
        .catch(()=>{
            buttonDepart.disabled=true;
            buttonArrive.disabled=true;
            infoBar.textContent="Error";

        }) 
    }

    async function arrive() {
        buttonDepart.disabled=false;
            buttonArrive.disabled=true;
            infoBar.textContent=`Arriving at ${busStopInfo.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();