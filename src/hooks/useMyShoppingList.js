import axios from "axios";
import { useQuery } from "react-query";

export function useMyShoppingList() {

    async function fetchApi() {
        const { data } = await axios.get('https://65b2ff169bfb12f6eafe943c.mockapi.io/mylist');

        return data;
    }

    const data = useQuery('myList', fetchApi);

    return data;
}