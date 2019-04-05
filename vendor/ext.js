export class Vec3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  copy(other) {
    this.x = other.x;
    this.y = other.y;
    this.z = other.z;
    return this;
  }

  toString() {
    return `X: ${this.x}, Y: ${this.y}, Z: ${this.z}`;
  }
}

export class Vec4 {
  constructor(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  copy(other) {
    this.x = other.x;
    this.y = other.y;
    this.z = other.z;
    this.w = other.w;
    return this;
  }

  toString() {
    return `X: ${this.x}, Y: ${this.y}, Z: ${this.z}, W: ${this.w}`;
  }
}
