import { useState } from "react";
import { users_list } from '../helpers/fakeData'

function useMyContacts() {
    const [data, setData] = useState();
    const [error, setError] = useState();

    setTimeout(() => {
        setData({ users_list });
    }, 1000);

    return { data, error }
}

export default useMyContacts
