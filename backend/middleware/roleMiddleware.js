// Role-Based Access Control middleware
// Usage: authorize("student"), authorize("faculty", "admin")
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: `Access denied. Role '${req.user.role}' is not authorized to access this resource`,
            });
        }

        next();
    };
};

module.exports = { authorize };
