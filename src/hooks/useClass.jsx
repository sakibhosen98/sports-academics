import { useQuery } from "@tanstack/react-query";

const useClass = () => {
  const {data: classes = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await fetch('https://sports-academies-server-eta.vercel.app/classes')
      return res.json();
    }
  });
  return [classes, loading, refetch ]
};

export default useClass;