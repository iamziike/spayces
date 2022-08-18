declare module '*.svg' {
  const SrcPath: string;
  export const ReactComponent: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export default SrcPath;
}

declare module '*.jfif' {
  const SrcPath: string;
  export default SrcPath;
}

declare module '*.png' {
  const SrcPath: string;
  export default SrcPath;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
