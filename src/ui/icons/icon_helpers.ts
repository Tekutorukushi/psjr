export const extendClassName = (className: string | undefined, ...classes: string[]): string => {
    return className ? `${className} ${classes.join(' ')}` : classes.join(' ')
}
