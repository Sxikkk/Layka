import {useState} from "react";

export const useFetching = (callback) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetch = async (...args) => {
        try{
            setLoading(true);
            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        }
    }
    return [fetch, loading, error];
}