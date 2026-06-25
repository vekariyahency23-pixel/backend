exports.dashboard = (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Admin Access Only",
    });
  }

  res.json({
    message: "Protected Route",
    user: req.user,
  });
};