const User = require('../models/User');

exports.validateUserExists = async function(req, res, next) {
    const { userId } = req.params;
    
    const user = await User.findOne({ userId });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    req.user = user; 
    next(); 
}

