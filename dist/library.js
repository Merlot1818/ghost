import { vec3 } from 'gl-matrix';
import { Vec3 } from 'ext';

var version = "1.0.0";

class A {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Name: ${this.name}`;
  }
}

class B extends A {
  constructor(name, position) {
    super(name);
    this.position = new Vec3().copy(position);
    console.log(vec3.create());
  }

  toString() {
    return `${super.toString()}, ${this.position}`;
  }
}

export { version, A, B };
