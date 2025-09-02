import {useLoaderData, Link, useParams} from "react-router";

type Book = {
    id: number,
    title: string,
    description: string,
    pageCount: number,
    excerpt: string,
    publishDate: string,
}

export async function loader({params} : { params : { id: string } }) {
    const res = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${params.id}`);
    if (res.status === 404) throw new Response("Book not found", { status: 404 });
    if (!res.ok) throw new Response("Failed to load book", { status: res.status });
    return (await res.json()) as Book; // ← single book
}

export default function BookDetail() {
    const book = useLoaderData() as Book;
    return (
        <section>
            <p><Link to="/books">← Back to books</Link></p>
            <h2>{book.title}</h2>
            <p><strong>Pages:</strong> {book.pageCount}</p>
            <p><strong>Published:</strong> {new Date(book.publishDate).toLocaleDateString()}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <details>
                <summary>Excerpt</summary>
                <pre style={{whiteSpace:"pre-wrap"}}>{book.excerpt}</pre>
            </details>
        </section>
    );
}
