import classes from './input.module.scss'

interface InputProps {
    placeholder?: string
}

export const Input =({ placeholder } :InputProps) => {
    return (
        <div className={classes.input}>
            <input placeholder={placeholder} />
        </div>
    );
}
