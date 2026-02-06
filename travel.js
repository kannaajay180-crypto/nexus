export default function handler(req, res) {
  res.json({
    trips: [
      { place: "Chandigarh", time: "6:00 PM", people: 3 },
      { place: "Delhi", time: "9:00 PM", people: 5 }
    ]
  });
}
