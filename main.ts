import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "You said 'send the invoice to Maria,' so I did — Maria Almeida of Lisbon, ceramic-frog seller, total stranger, who has now paid it out of politeness. You never said YOUR Maria. Ambiguity: yours.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
