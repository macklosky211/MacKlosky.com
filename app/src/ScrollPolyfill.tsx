"use client";

import { useEffect } from "react";

export default function ScrollPolyfill() {
    useEffect(() => {
        if (!CSS.supports("animation-timeline: scroll()")) {
            import("scroll-timeline-polyfill/dist/scroll-timeline.js");
        }
    }, []);

    return null;
}
