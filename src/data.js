async function fetchData(){
    const fetching = await fetch('data.json')
    const data = await fetching.json()
    return data
}
export async function destinations(){
    const data = await fetchData()
    const filter = data.destinations
    return filter
}
export async function crew(){
    const data = await fetchData()
    const filter = data.crew
    return filter
}
export async function technology(){
    const data = await fetchData()
    const filter = data.technology
    return filter
}