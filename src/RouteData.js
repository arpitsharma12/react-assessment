export const routeData = (travelDetails, existingBuses) => {
  let array = [];
  const { fromWhere, tohere, date } = travelDetails;
 
  for (const bus of existingBuses) {
    const buses = busInformation[bus?.id];
    const { name, model, seats } = bus;

    const pickUpStand = buses.filter((bus) => {
      return bus?.cityName === fromWhere;
    });

    const departurePoint = buses.filter((bus) => {
      return bus?.cityName === tohere;
    });


    const time = Math.abs(
      Number(pickUpStand[0]?.time) - Number(departurePoint[0]?.time)
    );

    const distance = Math.abs(
      Number(pickUpStand[0]?.distance) - Number(departurePoint[0]?.distance)
    );

    const amount = distance * 2;


    array.push({
      id: Math.random().toFixed(3) * 10000,
      fromWhere,
      name,
      tohere,
      date,
      amount,
      model,
      time,
      seats,
      distance,
     
    });
  }
  return array;
};

export const existingBuses = [
  {
    id: "bus1",
    name: "MHRTC",
    model: ["non A/c seating"],
    seats: 40,
  },
  {
    id: "bus2",
    name: "The Royal Seat.",
    model: ["A/c sleeper"],
    seats: 40,
  },
  {
    id: "bus3",
    name: "Liberty Tours",
    model: ["A/c sleeper"],
    seats: 30,
  },
  {
    id: "bus4",
    name: "Adventure Travels",
    model: ["A/c seating"],
    seats: 40,
  },
  {
    id: "bus5",
    name: "Sky's the Limit",
    model: ["Non A/c sleeper"],
    seats: 40,
  },
];

export const busInformation = {
  bus1: [
    { id: "101", time: "3", cityName: "Hyderabad", distance: 0 },
    { id: "102", time: "4", cityName: "Banglore", distance: 200 },
    { id: "103", time: "5", cityName: "Chennai", distance: 400 },
    { id: "104", time: "6", cityName: "Indore", distance: 600 },
    { id: "105", time: "7", cityName: "Mumbai", distance: 800 },
    { id: "106", time: "8", cityName: "Pune", distance: 1000 },
  ],

  bus2: [
    { id: "101", time: "3", cityName: "Hyderabad", distance: 0 },
    { id: "102", time: "4", cityName: "Banglore", distance: 200 },
    { id: "103", time: "5", cityName: "Chennai", distance: 400 },
    { id: "104", time: "6", cityName: "Indore", distance: 600 },
    { id: "105", time: "7", cityName: "Mumbai", distance: 800 },
    { id: "106", time: "8", cityName: "Pune", distance: 1000 },
  ],

  bus3: [
    { id: "101", time: "3", cityName: "Hyderabad", distance: 0 },
    { id: "102", time: "4", cityName: "Banglore", distance: 200 },
    { id: "103", time: "5", cityName: "Chennai", distance: 400 },
    { id: "104", time: "6", cityName: "Indore", distance: 600 },
    { id: "105", time: "7", cityName: "Mumbai", distance: 800 },
    { id: "106", time: "8", cityName: "Pune", distance: 1000 },
  ],

  bus4: [
    { id: "101", time: "3", cityName: "Hyderabad", distance: 0 },
    { id: "102", time: "4", cityName: "Banglore", distance: 200 },
    { id: "103", time: "5", cityName: "Chennai", distance: 400 },
    { id: "104", time: "6", cityName: "Indore", distance: 600 },
    { id: "105", time: "7", cityName: "Mumbai", distance: 800 },
    { id: "106", time: "8", cityName: "Pune", distance: 1000 },
  ],
  bus5: [
    { id: "101", time: "3", cityName: "Hyderabad", distance: 0 },
    { id: "102", time: "4", cityName: "Banglore", distance: 200 },
    { id: "103", time: "5", cityName: "Chennai", distance: 400 },
    { id: "104", time: "6", cityName: "Indore", distance: 600 },
    { id: "105", time: "7", cityName: "Mumbai", distance: 800 },
    { id: "106", time: "8", cityName: "Pune", distance: 1000 },
  ],
};

