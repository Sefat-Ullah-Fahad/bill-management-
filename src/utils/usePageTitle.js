import { useEffect } from "react";

// Custom Hook for dynamic page title
const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default usePageTitle;
