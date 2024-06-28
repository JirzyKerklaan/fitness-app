import WorkoutTypeCard from '../components/WorkoutTypeCard';

const WorkoutTypeCardsList = (props) => {
    return (
        <div className="workout-type-cards-list">
            {['Strength','Cardio','Yoga','Interval','Running','Balance'].map(workout => (
                <WorkoutTypeCard type={workout} />
            ))}
        </div>
    )
}

export default WorkoutTypeCardsList;