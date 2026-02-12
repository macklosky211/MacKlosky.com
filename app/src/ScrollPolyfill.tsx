"use client"

import { useEffect } from "react"

export default function ScrollPolyfill() {
    useEffect(() => {
        let polyfillLoaded = false

        const loadPolyfill = async () => {
            if (!CSS.supports("animation-timeline: scroll()")) {
                await import("scroll-timeline-polyfill/dist/scroll-timeline.js")
                polyfillLoaded = true
            }
        }

        loadPolyfill()

        const onPageShow = async () => {
            if (polyfillLoaded) {
                await import("scroll-timeline-polyfill/dist/scroll-timeline.js")
            }
        }

        window.addEventListener("pageshow", onPageShow)

        return () => {
            window.removeEventListener("pageshow", onPageShow)
        }
    }, [])

    return null
}
