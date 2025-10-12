'use client'
import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        try {
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data))
        } catch (error) {
            console.log(error);
        }
    },[url])
    
    return { data }
};

export default useFetch;