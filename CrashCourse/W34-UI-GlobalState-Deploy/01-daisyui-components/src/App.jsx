import "./index.css";

export default function App() {
    return (
        <div className="min-h-screen bg-base-100">
            {/* NAVBAR */}
            <div className="navbar bg-base-200 px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">My CRUD App</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">
                            User Menu
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li><a>Profile</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* ACCORDION */}
                <div className="card bg-base-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Accordion</h2>
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                                <input type="radio" name="my-accordion" defaultChecked />
                                <div className="collapse-title text-lg font-medium">Section 1</div>
                                <div className="collapse-content">Hello from Section 1</div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                                <input type="radio" name="my-accordion" />
                                <div className="collapse-title text-lg font-medium">Section 2</div>
                                <div className="collapse-content">Hello from Section 2</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LIST */}
                <div className="card bg-base-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title">List</h2>
                        <ul className="menu bg-base-100 rounded-box w-56">
                            <li><a className="active">Dashboard</a></li>
                            <li><a>Books</a></li>
                            <li><a>Authors</a></li>
                        </ul>
                    </div>
                </div>

                {/* TABLE */}
                <div className="card bg-base-200 shadow md:col-span-2">
                    <div className="card-body">
                        <h2 className="card-title">Table</h2>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Rex</td>
                                    <td>Dog</td>
                                    <td><span className="badge badge-success">Available</span></td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Mittens</td>
                                    <td>Cat</td>
                                    <td><span className="badge badge-error">Sold</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
