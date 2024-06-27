import {getCollectionEntries} from '../../helpers/strapiHelper';
import WorkoutCard from '../components/workoutCard'
let allWorkouts = await getCollectionEntries('workouts');

const Home = () => {
  return (
    <main>
      <h2>{allWorkouts.length} workouts gevonden</h2>
        {allWorkouts.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </main>
    );
  };
  
  export default Home;