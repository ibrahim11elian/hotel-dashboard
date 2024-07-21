import Spinner from "../../ui/Spinner";
import { TodayItem } from "./TodayItem";
import useTodayActivity from "./useTodayActivity";

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <div className="col-span-2 flex flex-col gap-6 rounded-md border border-gray-200 bg-white p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">Today</h2>
      </div>

      {!isLoading ? (
        activities?.length > 0 ? (
          <TodayList activities={activities} />
        ) : (
          <p className="mt-2 text-center text-lg font-medium text-gray-700">
            No activity today
          </p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default TodayActivity;

function TodayList({ activities }) {
  return (
    <ul className="scrollbar-hide overflow-x-hidden overflow-y-scroll">
      {activities?.map((activity) => (
        <TodayItem activity={activity} key={activity.id} />
      ))}
    </ul>
  );
}
