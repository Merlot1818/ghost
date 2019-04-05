import { vec3 } from 'gl-matrix';
import { Vec3 } from 'ext';
import A from './moduleA';

export default class B extends A {
  constructor(name, position) {
    super(name);
    this.position = new Vec3().copy(position);
    console.log(vec3.create());
  }

  toString() {
    return `${super.toString()}, ${this.position}`;
  }
}