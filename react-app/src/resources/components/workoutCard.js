const WorkoutCard = (props) => {
    const {title, estimated_time, difficulty, intensity} = props.workout.attributes;

    const convertTimeToMinutes = (timeString) => {
        const [hours, minutes] = timeString.split(':');

        const hoursInMinutes = parseInt(hours, 10) * 60;
        const minutesInMinutes = parseInt(minutes, 10);
    
        const totalMinutes = hoursInMinutes + minutesInMinutes;
    
        return totalMinutes;
    };

    let duration = `${convertTimeToMinutes(estimated_time)} min`;

    return (
        <div className="workout-card">
            <div className="left">
                <div className="label">{ difficulty }</div>
                <div className="name">{ title }</div>
                <div className="time-estimate">{ duration }</div>
            </div>
            <div className="right">
                <div className="intensity">{ intensity }</div>
            </div>
        </div>
    )
}

export default WorkoutCard;