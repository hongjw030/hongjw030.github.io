import { useQuery } from "@tanstack/react-query";

import { getPostList } from "@/apis/post";
import { getProjectList } from "@/apis/project";
import { COUNT_PER_CAROUSEL } from "@/constants";

export default function useGetCarouselCardList() {
  const { data: postCarousel, isLoading: postCarouselIsLoading } = useQuery({
    queryKey: ["post-carousel"],
    queryFn: () => getPostList({ count: COUNT_PER_CAROUSEL }),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  
  const { data: projectCarousel, isLoading: projectCarouselIsLoading } = useQuery({
    queryKey: ["project-carousel"],
    queryFn: () => getProjectList({ count: COUNT_PER_CAROUSEL }),
    retry: 3,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return {postCarousel, postCarouselIsLoading, projectCarousel, projectCarouselIsLoading};
}
