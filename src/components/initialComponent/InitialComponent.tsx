import CATEGORY_ARRAY from "@/constants/category";
import { currentCategoryAtom } from "@/store/category";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function InitialComponent() {
  const router = useRouter();
  const { mainId, subId } = router.query;
  const [current, setCurrent] = useAtom(currentCategoryAtom);

  const currentMainObject = mainId
    ? CATEGORY_ARRAY[
        CATEGORY_ARRAY.findIndex((el) => el.mainCategory.id === mainId)
      ]
    : null;

  const currentSubObject =
    currentMainObject && subId
      ? currentMainObject.subCategory[
          currentMainObject.subCategory.findIndex((el) => el.id === subId)
        ]
      : null;

  useEffect(() => {
    setCurrent({
      currentMainCategoryAtom: currentMainObject?.mainCategory ?? null,
      currentSubCategoryAtom: currentSubObject,
    });
  }, [mainId, subId, currentMainObject, currentSubObject]);

  return null;
}
