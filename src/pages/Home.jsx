import Spinner from "../components/Spinner";
import Card from "../components/Card"
import { api } from '../baseUrl';
import { useState, useEffect } from "react";
function Home(){
    const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	async function getData(){
		setLoading(true);
		try{
			const response = await fetch(api);
			const apidata = await response.json();
            console.log("FETCHING DATA");
            console.log(apidata);
			setData(apidata);
		}
		catch(error){
			console.log("oops....something went wrong")
		}
		setLoading(false);
	}
	useEffect(()=>{
		getData();
	}, []);
    return(
        <div className={loading ? "min-h-screen flex justify-center items-center" : "flex flex-wrap w-[1200px] mx-auto justify-center items-stretch min-h-screen pt-24 gap-5"}>
            {
                loading ? (<Spinner/>) : data.length > 0 ?
                    data.map((itemDetails)=>{
                    return <Card key={itemDetails.id} itemDetails={itemDetails}/>}) : 
                    <div>NO DATA FOUND</div>
            }
        </div>
    )

}
export default Home;