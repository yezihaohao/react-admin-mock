module.exports = (req, res) => {
  res.json({
    uid: 2,
    permissions: ["auth", "auth/authPage", "auth/authPage/visit"],
    role: "访客",
    roleType: 2,
    userName: "访客"
  });
};
