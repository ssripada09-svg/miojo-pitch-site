# Miojo Pitch Site Build Notes

## Build status

Implemented a single-scroll investor-facing Miojo / Ciarra pitch site following the final master Claude Code prompt and PRD.

## Implemented sections

1. HeroSection
2. FounderProofSection
3. PlatformThesisSection
4. InterlockMapSection
5. WhyNowSection
6. BeautyDaysWedgeSection
7. OperatingLayerSection
8. MiojoOSProofSection
9. RevenueArchitectureSection
10. ExpansionPathSection
11. WhyThisWinsSection
12. SignalsAndProofSection
13. ClosingStatementSection
14. CTASection

## Signature prompt modules implemented

- MiojoHeroObject
- FounderBottleneckTransition equivalent with generated deck-native SVG asset
- MiojoInterlockMap with generated deck-native SVG asset
- BeautyDaysJourneyModule with generated deck-native SVG asset
- OperatingLayerCanvas
- MiojoOSMockupRail
- RevenueArchitectureMatrix
- ExpansionPathTimeline
- FinancialProjectionStoryModule
- OrgArchitectureExplorer
- DeckAssetLightbox

## Asset handling

Attempted to extract embedded media from available Ciarra/Miojo PPTX decks. The extracted deck media files were blank/white and not useful as direct site assets. Following the prompt fallback rule, the build reconstructs key deck-native visuals as web-native SVG assets in:

- `public/assets/generated/founder-bottleneck.svg`
- `public/assets/generated/miojo-interlock.svg`
- `public/assets/generated/beauty-days-journey.svg`

These use the deck palette and source logic rather than low-quality screenshots.

## Verification

- `npm run lint` passed
- `npm run build` passed
- Local dev server served page at `http://localhost:3000`
- Curl confirmed the app serves the expected title/content

## Known limitations / next QA

- No browser screenshot QA was possible in this environment because Playwright Chromium could not launch due missing shared library `libnspr4.so`, and browser tool navigation to localhost was blocked.
- Build is prompt-faithful and production-build clean, but still needs human visual QA in browser for final art direction, spacing, and motion restraint.
- Real client-provided imagery / clean deck exports / Miojo OS screenshots can further improve the site in a follow-up asset polish sprint.
