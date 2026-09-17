import React from 'react'

const page = () => {

    const handleSubbmit = async (formData) => {
        "use server"

        const username = formData.get("username");

        console.log(username);
        console.log(formData)
    }
    return (
        <div>
            <form action={handleSubbmit}>
                <input type="text" name="username" />
                <button>Sand</button>
            </form>
        </div>
    )
}

export default page
