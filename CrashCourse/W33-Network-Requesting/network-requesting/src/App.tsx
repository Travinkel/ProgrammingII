import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from "react";
import { Api } from "./Api";

type Activity = {
    id: number;
    title: string;
    dueDate: string;
    completed: boolean;
}

function FetchActivitiesButton() {
    async function handleClick() {
        try {
            const res = await fetch("https://fakerestapi.azurewebsites.net/api/v1/Activities");
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data: Activity[] = await res.json();
            console.log("Fetched activities:", data);
            alert(`Fetched ${data.length} activities (check console for details).`);
        } catch (err) {
            console.error("Fetch failed: ", err);
        }
    }

    return (
        <section style={{padding: 12, border: "1px solid #ccc", borderRadius: 8}}>
            <h2>Fetch on Click</h2>
            <button onClick={handleClick}>Load Activities</button>
        </section>
    );
}

function ActivitiesList() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch("https://fakerestapi.azurewebsites.net/api/v1/Activities");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data: Activity[] = await res.json();
                setActivities(data);
            } catch (err) {
                console.error("Fetch failed: ", err);
            } finally {
                setIsLoading(false);
            }
        }

        load();
    }, []);
    if (isLoading) return <p>Loading...</p>;

    return (
        <ul>
            {activities.map(act => (
                <li key={act.id}>
                    {act.title} - due {new Date(act.dueDate).toLocaleDateString()} - {" "}
                    {act.completed ? "✅ Done" : "❌ Not done"}
                </li>
            ))}
        </ul>
    );
}

const api = new Api({
    baseUrl: "https://fakerestapi.azurewebsites.net",
});

function CreateActivity() {
    async function handleCreate(){
        try {
            const response = await api.api.v1ActivitiesCreate({
                id: Math.floor(Math.random() * 1000000),
                title: "New Activity",
                dueDate: new Date().toISOString(),
                completed: false,
            });
            console.log("Activity created:", response.data);
            alert("Activity created successfully!");
        } catch (err) {
            console.error("Create failed: ", err);
        }
    }

    return (
        <section style={{padding: 12, border: "1px solid #ccc", borderRadius: 8, marginTop: 16}}>
            <h2>Typesafe POST</h2>
            <button onClick={handleCreate}>Create Activity</button>
        </section>
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
                <FetchActivitiesButton/>
                <ActivitiesList/>
                <CreateActivity />
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
