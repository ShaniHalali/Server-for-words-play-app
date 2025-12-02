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
    const user = req.user;
    try {
        return res.status(200).json({user});

    } catch (error) {
        res.status(500).json({
            message: 'Faild to find user ',
            error: error.message
        });
    }
}


exports.updateUserLanguage = async(req, res) => {
    const user = req.user;
    const { learningLanguage } = req.body;
    
    try {
        user.learningLanguage = learningLanguage;
        await user.save();
        return res.status(200).json({user});

        } catch (error){
            console.error('Error update user language ', error.message);
            return res.status(500).json({message: 'Failed update user language'});

    }
};

exports.updateUserDifficulty = async(req, res) => {
    const user = req.user;
    const { difficulty } = req.body;
    
    try {
        user.difficulty = difficulty;
        await user.save();
        return res.status(200).json({user});

        } catch (error){
            console.error('Error update user difficulty ', error.message);
            return res.status(500).json({message: 'Failed update user difficulty'});

    }
};

exports.updateUserTotalScore = async(req, res) => {
    const user = req.user;
    const { pointsToAdd } = req.body;
    
    try {
        user.totalScore += pointsToAdd;
        await user.save();
        return res.status(200).json({user});

        } catch (error){
            console.error('Error update user total score ', error.message);
            return res.status(500).json({message: 'Failed update user total score'});

    }
};

exports.updateUserAnswers = async(req, res) => {
    const user = req.user;
    const { correctAnswers, wrongAnswers } = req.body;
    
    try {
        user.numOfWrongAnswers += correctAnswers;
        user.NumOfCorrectAnswers += wrongAnswers;
        await user.save();
        return res.status(200).json({user});

        } catch (error){
            console.error('Error update user status answers ', error.message);
            return res.status(500).json({message: 'Failed update user status answers'});

    }
};
    
