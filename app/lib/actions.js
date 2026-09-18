import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"

export const addUser = async (formData) => {
    "use server"
    // const username = formData.get("username")
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashPassword,
            phone,
            address,
            isAdmin,
            isActive
        })

        await newUser.save();
    } catch (error) {
        console.log(error)
        throw new Error("Faild to create user.")
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

export const addProduct = async (formData) => {
    "use server"
    // const username = formData.get("username")
    const { title, category, price, stock, color, size, desc } = Object.fromEntries(formData);

    try {
        connectToDB();

        const newProduct = new Product({
            title,
            category,
            desc,
            price,
            stock,
            color,
            size
        })

        await newProduct.save();
    } catch (error) {
        console.log(error)
        throw new Error("Faild to create product.")
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const deleteProduct = async (formData) => {
    "use server"
    // const username = formData.get("username")
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        const delProduct = await Product.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Faild to delete product.")
    }

    revalidatePath("/dashboard/products")
    // redirect("/dashboard/products")
}

export const deleteUser = async (formData) => {
    "use server"
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        const delUser = await User.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Faild to delete user.")
    }

    revalidatePath("/dashboard/products")
}

export const fetchUser = async (id) => {
    "use server"

    try {
        connectToDB();
        const user = await User.findById(id)

        return user
    } catch (error) {
        console.log(error)
        throw new Error("Faild to fetch user detils.")
    }
}

export const updateUser = async (formData) => {
    "use server"

    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    try {
        connectToDB();

        const updateFields = {
            username, email, password, phone, address, isAdmin, isActive
        }

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || updateFields[key] === undefined) &&
                delete updateFields[key]
        );

        if (updateFields?.password) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(updateFields.password, salt);
            updateFields.password = hashPassword
        }


        const user = await User.findByIdAndUpdate(id, updateFields)


    } catch (error) {
        console.log(error)
        throw new Error("Faild to fetch user detils.")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}


export const fetchProduct = async (id) => {
    "use server"

    try {
        connectToDB();
        const product = await Product.findById(id)
        
        return product
    } catch (error) {
        console.log(error)
        throw new Error("Faild to fetch Product details")
    }
}