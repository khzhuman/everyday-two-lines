import { mkdirSync, writeFileSync } from 'node:fs';

const lineOne = 'A queue is a human train: everyone stands in a single line, and the whole line only moves when the person at the front does.';
const lineTwo = 'The train fits because a queue moves in one line like carriages, but a real train has an engine pulling it, and a queue only has tired feet.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', [lineOne, lineTwo].join('\n'), 'utf8');
