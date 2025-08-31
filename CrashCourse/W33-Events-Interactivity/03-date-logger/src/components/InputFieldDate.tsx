import './../App.css'

export default function InputFieldDate() {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        // value is a string in the format YYYY-MM-DD
    }

    return (
        <input type="date" onChange={handleChange}/>
    );
}