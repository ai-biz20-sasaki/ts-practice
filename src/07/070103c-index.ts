//defaultエクスポートと普通エクスポートの受け取り方
import defaultExportedIncrement, { value } from "./070103c-counter.js";

console.log(`value値は${value}です`);
console.log(`カウンタの値は${defaultExportedIncrement()}です`);
console.log(`value値は${value}です`);
console.log(`カウンタの値は${defaultExportedIncrement()}です`);
console.log(`value値は${value}です`);
console.log(`カウンタの値は${defaultExportedIncrement()}です`);
