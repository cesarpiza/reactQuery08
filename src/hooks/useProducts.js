import axios from "axios";
import { useQuery } from "react-query";

export function useSupermarket() {

    async function fetchApi() {
        const { data } = await axios.get('https://65b2ff169bfb12f6eafe943c.mockapi.io/products');

        return data;
    }

    const data = useQuery('products', fetchApi);

    return data;
}