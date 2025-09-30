"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export const useHandleNavClick = () => {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const id = href.replace("#", "");

        // If not on the homepage, navigate there using Next's router so
        // we keep SPA navigation without a full page reload.
        if (pathname !== "/") {
          router.push(`/#${id}`);

          // After navigation, try to scroll to the element. Next's
          // navigation may not immediately render the element, so wait a
          // short time before attempting to scroll.
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              const navHeight = 70;
              const y =
                el.getBoundingClientRect().top + window.pageYOffset - navHeight;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }, 100);

          return;
        }

        // If already on the homepage, smooth-scroll to the section and
        // update the URL hash without triggering a navigation.
        const el = document.getElementById(id);
        if (el) {
          const navHeight = 70;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: y, behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    },
    [pathname, router]
  );
};
