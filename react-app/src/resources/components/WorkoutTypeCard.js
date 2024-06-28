const WorkoutTypeCard = (props) => {
    return (
        <div className={'workout-type-card workout-type-card-' + props.type}>
            <div className="text">
                <h3>{props.type}</h3>
                <p>100+ workouts available</p>
            </div>
        </div>
    )
}

export default WorkoutTypeCard;