export default function handler(req, res) {
  res.json({
    classes: [
      "9:00 - Math (Room A1)",
      "11:00 - Physics (Lab 2)",
      "2:00 - Free Period"
    ]
  });
}
