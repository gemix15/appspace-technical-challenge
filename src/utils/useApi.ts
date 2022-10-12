import { useState, useEffect } from 'react'

export type ApiResult = {
  info: any;
  results: any[];
}

const useApi = (): ApiResult => {
    let api = `https://rickandmortyapi.com/api/character/`;

    const [data, setData] = useState<any>([]);
    const { info, results } = data;
    
    useEffect(() => {}, [api]);
    useEffect(() => {
        (async function (){
            let response = await fetch(api).then((res) => res.json());
      
            setData(response);
          })();
    }, [api]);

    return {info, results};
}

export default useApi;
