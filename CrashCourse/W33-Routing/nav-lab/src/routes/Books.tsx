import {Link, useLoaderData} from "react-router";

export type Book = {
    id: number,
    title: string,
    description: string,
    pageCount: string,
    excerpt: string,
    publishedDate: string,
}

export async function loader() {
    const res = await fetch(
        "https://fakerestapi.azurewebsites.net/api/v1/Books"
    );
    if (!res.ok) {
        throw new Response("Failed to load books", {status: res.status});
    }
    return (await res.json()) as Book[];
}

export default function Books() {
    const books = useLoaderData() as Book[];
    return (
        <section>
            <h2>Books</h2>
            <ul>
                {books.slice(0, 20).map((b) => (
                    <li key={b.id}>
                        <Link to={`/books/${b.id}`}>
                            <strong>{b.title}</strong> — {b.pageCount} pages
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}