const User = require('../models/User')

exports.createUser = async(req , res) => {
    const {userId , name, learningLanguage, difficulty} = req.body;

    //Checked it also in the client side but just to make sure
    if (!userId || !name || !learningLanguage || !difficulty) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // firebase Auth alredy checks if the user exists, but it needs to check for avoid dupplicate error
        const existingUser = await User.findOne({userId});
        if (existingUser) return res.status(409).json({
            message: 'User already exist',
            user: existingUser
        });

        const newUser = new User ({
            userId,
            name,
            learningLanguage,
            difficulty,
        });

        await newUser.save();

        // user registered succesfully
        return res.status(201).json(newUser);


    } catch (error) {
        console.error('Register error =' , error);
        return res.status(500).json({ message: 'Failed to register user'});

    }
}

exports.getUserById = async(req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findOne({userId});
        //user not found
        if(!user) return res.status(404).json({ message: 'User not found'});
        //user found
        return res.status(200).json({user});

    } catch (error) {
        res.status(500).json({
            message: 'Faild to find user ',
            error: error.message
        });
    }
}


// PUT /api/user/:userId
exports.updateUserLanguage = async(req, res) => {
    const { userId } = req.params;
    const { learningLanguage } = req.body;
    
    try {
        const updatedUser  = await User.findOneAndUpdate(
            {userId},
            {learningLanguage},
            {new: true}
        );

        if(!updatedUser ) {
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json({updatedUser});

        } catch (error){
            console.error('Error update user language ', error.message);
            return res.status(500).json({message: 'Failed update user language'});

    }
};
    
