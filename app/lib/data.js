import { User } from "./models"
import { connectToDB } from "./utils"

export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2
    try {
        await connectToDB()

        const count = await User.find({ username: { $regex: regex }}).countDocuments();

        const users = await User.find({ username: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1))

        return { users, count}
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch Users!")
    }
}