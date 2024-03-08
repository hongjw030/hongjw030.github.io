import { CategoryType } from '@/types/CategoryType';
import { atom } from 'jotai';

export const countAtom = atom(0);

// 현재 카테고리 위치

interface CurrentCategoryAtomType {
  currentMainCategoryAtom: null | CategoryType,
  currentSubCategoryAtom: null | CategoryType,
}

export const currentCategoryAtom = atom<CurrentCategoryAtomType >({
  currentMainCategoryAtom: null,
  currentSubCategoryAtom: null,
});