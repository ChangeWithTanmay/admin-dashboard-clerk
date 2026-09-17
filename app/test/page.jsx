import React from 'react'

const page = () => {

    const handleSubbmit = async (formData) => {
        "use server"

        // const username = formData.get("username");


        // console.log(username);
        const {username, email, password}= Object.fromEntries(formData)
        console.log(username, email, password)
    }
    return (
        <div>
            <form action={handleSubbmit}>
                <input type="text" name="username" />
                <input type="text" name="email" />
                <input type="text" name="password" />
                <button>Sand</button>
            </form>
        </div>
    )
}

export default page
