import CategoryHeader from "@/components/header/CategoryHeader";
import MainLayout from "@/layouts/MainLayout";

export default function MainCategoryPage() {
  return (
    <MainLayout selected="category">
      <CategoryHeader />
      header에 title과 간단한 description, 뒷배경으론 사진 블러된 걸 보여준다.
      <div>카테고리 내 글들을 보여준다</div>
      예를 들어 posts/algorithm/index.ts 임포트 글들을 가져오기.
      <br />그 아래 sub 카테고리에 대해선... post/algorithm/study 폴더 내 글
      순회해서 가져오면 되징.
    </MainLayout>
  );
}
