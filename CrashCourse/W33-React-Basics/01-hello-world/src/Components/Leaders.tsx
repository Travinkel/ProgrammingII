import Leader from "./Leader.tsx";

const leaders = [
    { name: "Rosie O'Donnell", job: "Anti Trump", wealth: 1000000000 },
    { name: "Trump", job: "President", wealth: 3000000000 },
    { name: "Obama", job: "President", wealth: 2000000000 },
];

export default function Leaders() {
    return (
        <section>
            {leaders
                .filter((leader) => leader.wealth > 2000000) // filter condition
                .map((leader, index) => (
                    <Leader
                        key={index}
                        name={leader.name}
                        job={leader.job}
                        wealth={leader.wealth}
                    />
                ))}
        </section>
    );
}
