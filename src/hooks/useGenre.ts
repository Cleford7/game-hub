import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
  }

const useGenre = () => {
    const [genreList, setGenreList] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {    
        const controller = new AbortController();
    
        setLoading(true);
    
        apiClient
          .get<FetchGenresResponse>("/genres",
          { signal: controller.signal })
          .then((response) => {
            setGenreList(response.data.results);
            console.log(response.data.results);
            setLoading(false);
          })
          .catch((error) => {
            if (error instanceof AbortController ) return;
            setError(error.message);
            setLoading(false);
          });
    
        return () => {controller.abort()}
         
      }, []);
    
        return { genreList, error, isLoading };
}

export default useGenre;