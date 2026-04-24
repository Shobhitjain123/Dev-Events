<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your Dev Events project with PostHog analytics. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to route analytics requests through your own domain — improving reliability and reducing ad-blocker interference. Two client-side events are now tracked: one when users click the "Explore Events" CTA and one when they click on individual event cards (with rich properties including event title, slug, location, and date).

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the 'Explore Events' CTA button on the home page | `components/ExportBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/395730/dashboard/1506340
- **Explore Events Button Clicks** (line chart): https://us.posthog.com/project/395730/insights/U5v1ittE
- **Event Card Clicks Over Time** (line chart): https://us.posthog.com/project/395730/insights/eAnCFcyd
- **Top Events by Clicks** (bar chart, breakdown by event title): https://us.posthog.com/project/395730/insights/Ebz2qV02
- **Explore → Event Click Funnel** (conversion funnel): https://us.posthog.com/project/395730/insights/7NULWCqR
- **Unique Users Engaging With Events** (area chart, DAU): https://us.posthog.com/project/395730/insights/CWCpCsUL

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
