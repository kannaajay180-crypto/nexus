export default function handler(req, res) {
  res.json({
    role: "student",
    permissions: ["view", "join_travel", "read_mail"]
  });
}
