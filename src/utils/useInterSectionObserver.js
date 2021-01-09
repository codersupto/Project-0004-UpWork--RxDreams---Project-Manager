import { useInView } from "react-intersection-observer";

export default function useInterSectionObserver() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });
  return [ref, inView, entry];
}
