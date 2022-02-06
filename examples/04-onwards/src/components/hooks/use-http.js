import {useCallback, useState} from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestOptions, applyData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(requestOptions.url, {
                method: requestOptions.method ?? 'GET',
                body: requestOptions.body ? JSON.stringify(requestOptions.body) : null,
                headers: requestOptions.headers ?? {}
            });

            if (!response.ok) {
                throw new Error('HTTP Req not successful');
            }

            const data = await response.json();

            applyData(data);
        } catch (e) {
            setError(e.message ?? 'Something went wrong!');
        }

        setIsLoading(false);
    }, []);

    return {isLoading, error, sendRequest};
}

export default useHttp;