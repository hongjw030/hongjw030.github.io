import useGetCategoryDB from "@/hooks/useGetCategoryDB";
import { CategoryListAtom } from "@/store/category";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function InitialFetcher() {
  const [atom, setAtom] = useAtom(CategoryListAtom);

  useEffect(() => {
    const data = useGetCategoryDB();
    data.then((result) => {
      if (result) {
        setAtom(result);
      }
    });
    return;
  }, []);

  return null;
}
