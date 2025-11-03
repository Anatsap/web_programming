import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

// const response = await axios.get(`${BASE_URL}/products`);
// setData(response.data);

function gparametrs(chosen) {
    if (chosen === undefined) {
        return undefined
    }
    const { search, priceRange } = chosen;
    const parametrs = {};
    if(search){
    parametrs.search = search;
    }if(priceRange && priceRange !== 'Any'){
    parametrs.priceRange = priceRange;
    }
    return parametrs;
}
async function getActivity({chosen, setData, setLoading, setError}){
    setLoading(true);
    try{
        const response = await axios.get(`${BASE_URL}/products`, {
            params: gparametrs(chosen)
          });
        setData(response.data);
        setLoading(false);
        setError(null);
    }catch(err){
        setError(err)
        setLoading(false)
        console.log("Error " + err);
    }

}
export default getActivity;
