declare module '*.scss';

declare module '@/*' {
    const value: Record<string, unknown>;
    export default value;
}
