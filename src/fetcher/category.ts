import { instance } from './instance';

export const getMainCategoryList = async () => {
    const result = await instance.get('/api/mainCategory');
    return result.data;
};

export const getSubCategoryList = async () => {
  const result = await instance.get('/api/subCategory');
  return result.data;
};
