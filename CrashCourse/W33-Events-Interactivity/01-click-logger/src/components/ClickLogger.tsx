import './../App.css'

interface ClickLoggerProps {
    onClick: () => void;
}

export const ClickLogger = ({ onClick }: ClickLoggerProps) => {
    return (
        <button onClick={onClick}>Click me</button>
    )
}

export function clicked()  {
    console.log('clicked');
}

export default clicked;