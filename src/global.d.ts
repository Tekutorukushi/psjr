declare module '*.scss' {
    const scss: { [key: string]: string };
    export default scss;
}
declare namespace JSX {
    interface Element { }
    interface IntrinsicElements {
        header: any;
        div: any;
        a: any;
        span: any;
        button: any;
        input: any;
        svg: any;
        path: any;
        video: any;
        source: any;
        defs: any;
        mask: any;
        rect: any;
        text: any;
    }
}
