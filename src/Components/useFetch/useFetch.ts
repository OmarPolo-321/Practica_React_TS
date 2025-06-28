import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorType>(null)

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch(url, controller);

        if (!response.ok) {
          throw new Error("Error en la petición")
        }

        const jsonData: T = await response.json();

        setData(jsonData)
        setError(null);
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData();

    return () => {
      controller.abort();
    }

  }, [url])

  return { data, loading, error }
}
/* Como Utilizar lo
import { useFetch } from './hooks/useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const { data, loading, error } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}


*/