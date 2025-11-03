import axios from 'axios'

const BASE_URL = 'http://localhost:5000'
async function get_product({id, setData, setLoading, setError}){
    setLoading(true)
    try {
        const response = await axios.get(BASE_URL + `/products/${id}`)
        setData(response.data)
        setLoading(false)
    } catch (err) {
        setError(err)
        setLoading(false)
        console.log(err)
    }

}

export default get_product;