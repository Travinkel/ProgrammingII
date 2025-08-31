import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* ──────────────────────────────────────────────────────────────
   A) Simple string state + button that changes it
   ────────────────────────────────────────────────────────────── */

function SimpleStringState() {
    const [state, setState] = useState('Hello, world!');

    return (
        <section style={{padding: 12, border: '1px solid #ccc', borderRadius: 8, marginBottom: 16}}>
            <h2>Simple String State</h2>
            <p>Current message: <strong>{state}</strong></p>
            <button
                onClick={() => setState((prev) => (prev === "Hello, world!" ? "Button clicked!" : "Hello, world!"))}>
                Toggle Message
            </button>
        </section>
    );
}

/* ──────────────────────────────────────────────────────────────
   B) Two-way binding (controlled input ↔ state)
   ────────────────────────────────────────────────────────────── */

function TwoWayBinding() {
    const [text, setText] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    return (
        <section style={{padding: 12, border: "1px solid #333", borderRadius: 8, marginBottom: 16}}>
            <h2>Two-Way Binding</h2>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type here…"
                style={{padding: 6, marginRight: 8}}
            />
            <span>Mirror: <strong>{text}</strong></span>
        </section>
    );
}

/* ──────────────────────────────────────────────────────────────
   C) useState generic with a TypeScript interface
   ────────────────────────────────────────────────────────────── */
interface TitleState {
    title: string;
}

function GenericStateExample() {
    const [state, setState] = useState<TitleState>({title: "My Title"});

    return (
        <section style={{padding: 12, border: "1px solid #333", borderRadius: 8, marginBottom: 16}}>
            <h2>Generic useState Example</h2>
            <p>Title: <strong>{state.title}</strong></p>
            <button onClick={() => setState({title: "Updated Title"})}>Set Title</button>
        </section>
    );
}

/* ──────────────────────────────────────────────────────────────
   D) Register form with validation
   - Base task: length ≥ 6 and passwords match → else alert()
   - Harder bonus: render "Repeat password" only if pwd length ≥ 6
   - Much harder bonus: email format + strong password policy
   ────────────────────────────────────────────────────────────── */

interface RegisterModel {
    email: string;
    password: string;
    repeatPassword: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function isValidEmail(s: string) {
    return emailRegex.test(s);
}

function isValidPassword(s: string) {
    return strongPasswordRegex.test(s);
}

function isStrongPassword(s: string) {
    return strongPasswordRegex.test(s);
}

function RegisterForm() {
    const [model, setModel] = useState<RegisterModel>({
        email: "",
        password: "",
        repeatPassword: "",
    });
    // live validity

    const emailOk = model.email.length === 0 || isValidEmail(model.email);
    const passLenOk = model.password.length >= 6; // base requirement
    const passStrongOk = model.password.length === 0 || isStrongPassword(model.password); // much harder
    const passwordsMatch =
        model.repeatPassword.length === 0 || model.password === model.repeatPassword;

    function update<K extends keyof RegisterModel>(key: K, value: RegisterModel[K]) {
        setModel(prev => ({...prev, [key]: value}));
    }

    function handleSubmit(e:React.FormEvent
)
    {
        e.preventDefault();
        if (!passLenOk) {
            alert("Password must be at least 6 characters long");
            return;
        }
        if (!passwordsMatch) {
            alert("Passwords do not match.");
            return;
        }
        if (!emailOk) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!passStrongOk) {
            alert("Password must include upper+lowercase, number, and special char (≥8).");
            return;
        }

        alert("Registered successfully! ✅");
    }
    return (
        <form onSubmit={handleSubmit} style={{ border: "1px solid #333", padding: 12, marginTop: 16 }}>
            <h2>Register</h2>

            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={model.email}
                    onChange={e => update("email", e.target.value)}
                />
                {!emailOk && <div style={{ color: "tomato" }}>Invalid email</div>}
            </div>

            <div>
                <label>Password: </label>
                <input
                    type="password"
                    value={model.password}
                    onChange={e => update("password", e.target.value)}
                />
                {!passLenOk && <div style={{ color: "tomato" }}>Must be ≥ 6 characters</div>}
                {!passStrongOk && model.password.length > 0 && (
                    <div style={{ color: "tomato" }}>
                        Must include upper+lowercase, number, special, and be ≥ 8 chars.
                    </div>
                )}
            </div>

            {passLenOk && (
                <div>
                    <label>Repeat password: </label>
                    <input
                        type="password"
                        value={model.repeatPassword}
                        onChange={e => update("repeatPassword", e.target.value)}
                    />
                    {!passwordsMatch && model.repeatPassword.length > 0 && (
                        <div style={{ color: "tomato" }}>Passwords do not match</div>
                    )}
                </div>
            )}

            <button type="submit">Register</button>
        </form>
    );
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <SimpleStringState/>
                <TwoWayBinding/>
                <GenericStateExample/>
                <RegisterForm/>

                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
