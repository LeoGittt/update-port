declare module 'ogl' {
    export class Renderer {
        constructor(options?: any);
        gl: WebGLRenderingContext;
        setSize(width: number, height: number): void;
        render(options: { scene: any; camera?: any }): void;
    }
    export class Program {
        constructor(gl: any, options: any);
        uniforms: any;
    }
    export class Mesh {
        constructor(gl: any, options: { geometry: any; program: any });
    }
    export class Color {
        constructor(hex: string | number[]);
        r: number;
        g: number;
        b: number;
    }
    export class Triangle {
        constructor(gl: any, options?: any);
        attributes: any;
    }
    export class Vec2 {
        constructor(x?: number, y?: number);
        value: number[];
        set(x: number, y: number): void;
    }
}
