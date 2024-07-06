function miner(arr) {

    const result = {};

    for(let i = 0; i < arr.length; i += 2) {

        let resource = arr[i];
        let units = Number(arr[i + 1]);

        if (resource in result) {
            result[resource] += units;
        } else {
            result[resource] = units;
        }
    }
    const resurceEntries = Object.entries(result);
    for (const [resource, quantity] of resurceEntries) {
        console.log(`${resource} -> ${quantity}`);
    }
}

miner(["Gold", "155", "Silver", "10", "Copper", "17"]);
