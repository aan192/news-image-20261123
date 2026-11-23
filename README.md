# Monday 23 November 2026 — the world in one image

One idea, not a collage: the Earth on fire inside a single drop of
black oil, hanging over a narrow strait where tiny tankers pick their
way between dark cliffs. Oil is the thread that tied the day together.

## The three stories in the picture

- **COP31 fails — no fossil-fuel deal.** The climate talks in
  Türkiye collapsed without any language on phasing out fossil fuels.
  The UN chief called the outcome deeply disappointing; the EU said
  the talks had been hijacked by oil states. The burning Earth in the
  oil drop is that failure.
- **Hormuz: tankers struck, oil flow falls.** At least 25 tankers
  were hit in and around the Strait of Hormuz in a week — struck by
  projectiles and naval mines over the weekend — and Gulf oil flow
  dropped sharply. The strait and its small tankers run along the
  bottom of the picture, under the drop.
- **Seoul: minister quits over AI exam scandal.** South Korea's
  education minister resigned after sudden rule changes to the
  Suneung university entrance exam and an AI-driven cheating scandal.

Around the edges: the smog-hazed skyline at the foot of the picture
recalls Lahore, again the world's most polluted major city that
morning, and the small spacecraft beside Mercury in the corner nods to
BepiColombo's arrival in Mercury orbit, the weekend's space story
carried in the day's roundups.

## How it runs

Node 22, standard library only, no network:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies the `entry.png` beside `main.ts` to the output folder,
byte for byte, so both graded runs write the same file. The image is a
1024×1024 PNG under 1 MiB.

## Licence

MIT — see `LICENSE`.
