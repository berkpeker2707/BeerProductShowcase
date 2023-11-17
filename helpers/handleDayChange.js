const handleDayChange = (
  day,
  data,
  setSelectedDay,
  setSelectedLocation1,
  setSelectedLocation2
) => {
  setSelectedDay(day);
  // Update selected locations based on the chosen day
  const selectedData = data.find((item) => item.day === day);
  setSelectedLocation1(selectedData.locations[0]);
  setSelectedLocation2(selectedData.locations[1]);
};

export default handleDayChange;
