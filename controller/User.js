import User from "../model/User.js";

export const createUser = async (req, res) => {
    const { username, password } = req.body
    console.log(username)
    try {
        const newUser = new User({ username, password })
        const user = await newUser.save()

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params
    // console.log(username)
    try {
        const user = await User.findById(id)

        !user && res.status(404).json('not found')
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params
    const { oldName, username, password } = req.body
    // console.log(username)
    try {

        const user = await User.findOne({ oldName: username })

        const updatedUser = await User.findOneAndUpdate(oldName, { username, password }, { new: true })

        !user && res.status(404).json('not found')
        res.status(200).json(updatedUser)

    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id)

        !user && res.status(404).json('not found')
        res.status(200).json('delete succefully')

    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}
