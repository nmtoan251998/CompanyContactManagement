import { useState } from 'react';
import { user } from '../helpers/fakeData';

function useMyProfile() {
    const [data, setData] = useState();
    const [error, setError] = useState();

    setTimeout(() => {
        setData({ user });
    }, 1000);

    return { data, error };
}

export default useMyProfile
