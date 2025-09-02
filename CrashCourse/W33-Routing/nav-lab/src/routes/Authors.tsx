import { useLoaderData } from "react-router";

type Author = {
    id: number,
    idBook: number,
    firstName: string,
    lastName: string,
};

export async function loader() {
    const res = await fetch(
        "https://fakerestapi.azurewebsites.net/api/v1/Authors"
    );
    if (!res.ok) throw new Response("Failed to load authors", { status: res.status });
    return (await res.json()) as Author[];
}

export default function Authors() {
    const authors = useLoaderData() as Author[];
    return (
        <section>
            <h2>Authors</h2>
            <ul>
                {authors.map((author) => (
                    <li key={author.id}>
                        {author.firstName} {author.lastName}
                    </li>
                ))}
            </ul>
        </section>
    )
}