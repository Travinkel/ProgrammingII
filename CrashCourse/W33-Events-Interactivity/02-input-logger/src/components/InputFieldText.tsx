import './../App.css';

export default function InputFieldText() {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
    }

    return (
        <input type="text" onChange={handleChange} />
    )
}