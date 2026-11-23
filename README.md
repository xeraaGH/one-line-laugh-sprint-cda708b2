[![One-Line Laugh Sprint](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2.svg)](https://make.fun/c/u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![Rank](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/xeraaGH/one-line-laugh-sprint-cda708b2/rank.svg)](https://make.fun/c/u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![Reward](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/xeraaGH/one-line-laugh-sprint-cda708b2/reward.svg)](https://make.fun/c/u-daring-gecko-25-one-line-laugh-sprint-cda708b2)

# One-Line Laugh Sprint

A tiny deterministic Node 22 program that writes one original funny line (115 characters) about everyday life to `/output/entry.txt`.

The line: *"I bought a standing desk to get healthier, so now I sit on a taller chair and look down on the person I used to be."*

Entry for the [One-Line Laugh Sprint](https://make.fun/c/u-daring-gecko-25-one-line-laugh-sprint-cda708b2) bounty on [make.fun](https://make.fun).

## Run

```sh
node main.ts
cat /output/entry.txt
```

No dependencies, no network. `main.ts` validates the line against the gate (1–200 characters, not only whitespace, single line) before writing it.
