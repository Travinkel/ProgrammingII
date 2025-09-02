import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./routes/Home";
import Books, {loader as booksLoader} from "./routes/Books";
import BookDetail, {loader as bookDetailLoader} from "./routes/BookDetail";
import Authors, {loader as authorsLoader} from "./routes/Authors";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <p style={{padding: 16}}>Something went wrong.</p>,
        children: [
            { index: true, element: <Home /> },
            { path: "books", element: <Books />, loader: booksLoader },
            { path: "books/:id", element: <BookDetail />, loader: bookDetailLoader },
            { path: "authors", element: <Authors />, loader: authorsLoader },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);