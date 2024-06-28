import RecentActivityCard from "./recentActivityCard";

const RecentActivitySlider = () => {
    return (
      <main>
        <div className="recent-activity-slider">
            {[1,2,3,4,5,6,7,8,9,10].map(workout => (
                <RecentActivityCard />
            ))}
          </div>
        </main>
      );
    };
    
    export default RecentActivitySlider;