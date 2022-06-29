import {useState, useEffect} from "react";
import axios from "axios";

const CryptoData = () => {
    // data: represents our data, setdata sets the data we are pulling from the api
    const [dataMarkets, setDataMarkets] = useState([]);
    const [dataAssets, setDataAssets] = useState([]);
    const [dataExchanges, setDataExchanges] = useState([]);
    // collect user data, empty string
    const baseUrl = "https://www.cryptingup.com/api";

    // Make a request to all exchanges
    useEffect(() => {
        axios.get(${baseUrl}/exchanges/COINBASE/markets?size=5).then(res => {
            setDataMarkets(res.data.markets);
        });
        axios.get(${baseUrl}/exchanges?size=5).then(res => {
            setDataExchanges(res.data.exchanges);
        });
        axios.get(${baseUrl}/assets?size=5).then(res => {
            setDataAssets(res.data.assets);
        });
    }, []);


    return (
        <div>
            <h1>Data from my API</h1>
            {dataExchanges.map(x => <li key={x.exchange_id}>{x.name}</li>)}
            {/* List specific data for the 3 exchanges  */}
            <h1>Single Post data</h1>
            {dataMarkets.map(x => <li key={x.exchange_id}>{x.name}</li>)}
            <h1>Exchange Name: </h1>
            {dataAssets.map(x => <li key={x.exchange_id}>{x.name}</li>)}
            <p> </p>
        </div>
    )
};

export default CryptoData;