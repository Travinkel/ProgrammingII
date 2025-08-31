import '.././App.css';

interface LeaderProps {
    name: string;
    job: string;
    wealth: number;
}

// A 'stable genius' has many properties, not just a name, or a job title, or incredible wealth.
function Leader(props: LeaderProps) {
    return (
        <h2>
            {props.name} - {props.job} - ${props.wealth}
        </h2>
    );
}

export default Leader;