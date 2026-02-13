import posthog from "posthog-js"

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "https://macklosky.com/ingest",
  ui_host: "https://us.posthog.com",
  person_profiles: "always",
  defaults: "2025-11-30",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
});
