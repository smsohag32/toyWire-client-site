const loadData = async () => {
    const res = await fetch(`https://toy-wire-server.vercel.app/popular`);
    const data = await res.json();
    return data
}

export default loadData;