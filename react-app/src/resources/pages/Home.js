import {getCollectionEntries} from '../../helpers/strapiHelper';
import RecentActivitySlider from '../components/recentActivitySlider';
import WorkoutTypeCardsList from '../components/workoutTypeCardsList';
let allWorkouts = await getCollectionEntries('workouts');

const Home = () => {
  return (
    <main>
      <section>
        <h2>Recent activity</h2>
        <RecentActivitySlider />
      </section>

      <section>
        <h2>Workouts</h2>
        <WorkoutTypeCardsList />
      </section>
      {/* <h2>{allWorkouts.length} workouts gevonden</h2>
        {allWorkouts.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))} */}
      </main>
    );
  };
  
  export default Home;