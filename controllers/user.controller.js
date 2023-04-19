import userModel from "../mongodb/models/user.js";


const getAllUsers = async (req, res)=> {};

const createUser = async (req, res)=> {
    try {
        const {fullName, email, username, password} = req.body;

        const userExists = await userModel.findOne({email, username});

        if(userExists) return res.status(200).json(userExists);

        const newUser = await userModel.create({
            fullName,
            email,
            username,
            password
        });

        res.status(200).json(newUser);
        
    } catch(error){
        res.status(500).json({message: error.message})
    }
};

const getUserInfoByID = async (req, res)=> {};

export {
    getAllUsers,
    createUser,
    getUserInfoByID
}