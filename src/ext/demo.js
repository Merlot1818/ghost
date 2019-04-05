import '../css/main.css';
import { vec3 } from 'gl-matrix';
import { Vec3 } from 'ext';
import { A, B, version } from 'library';

const a = new A('A');
const b = new B('B', new Vec3(10, 20, 30));

console.log(version);
console.log(`${a}`);
console.log(`${b}`);
console.log(vec3.create());