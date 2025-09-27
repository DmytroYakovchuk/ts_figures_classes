type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('any length is <= 0');
    }

    const sideMax = Math.max(a, b, c);

    if (sideMax >= a + b + c - sideMax) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('the radius shoud be biggest 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  heigth: number;

  constructor(color: Color, width: number, heigth: number) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('width and heigth shoud be biggest 0');
    }
    this.color = color;
    this.width = width;
    this.heigth = heigth;
  }

  getArea(): number {
    const area = this.width * this.heigth;

    return Math.round(area * 100) / 100;
  }
}

const colorMap: Record<Color, string> = {
  red: 'A red',
  green: 'A green',
  blue: 'A blue',
};

const shapeMap: Record<Shape, string> = {
  triangle: 'triangle',
  rectangle: 'rectangle',
  circle: 'circle',
};

export function getInfo(figure: Figure): string {
  const colorName = colorMap[figure.color];
  const shapeName = shapeMap[figure.shape];
  const areaStr = figure.getArea();

  return `${colorName} ${shapeName} - ${areaStr}`;
}
