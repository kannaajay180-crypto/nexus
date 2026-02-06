export default function handler(req, res) {
  res.json({
    menu: [
      "Breakfast: Idli & Sambar",
      "Lunch: Rice, Dal, Paneer",
      "Dinner: Chapati & Veg Curry"
    ]
  });
}
