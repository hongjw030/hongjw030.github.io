// import fs from 'fs';
// import { join } from 'path';
// import matter from 'gray-matter';
// import { POST_DIR } from '@/constants';

// export function getAllPosts() {
//   const fileNames = fs.readdirSync(POST_DIR);
//   console.log(fileNames); // ['1.md', '2.md']
// }

// export function getAllPosts(fields: string[] = []) {
//   // 마크다운 파일들을 모두 가져오고,
//   const slugs = getPostSlugs();
//   const posts = slugs
//   	// 객체로 파싱한 뒤에,
//     .map((slug) => getPostBySlug(slug, fields))
//     // 날짜 순으로 정렬해서 반환해줍니다.
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
//   return posts;
// }