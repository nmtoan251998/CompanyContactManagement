export const user = {
    id: "1",
    department: {
        id: "1",
        name: "Marketing Department"
    },
    email: "example@company.net",
    name: "Johnathan",
    address: "4th Corner, Crossway, The Moon",
    phone: "+999999999999",
    dob: "1587531216543",
    role: "admin"
}

export const users_list = [...Array(10)].map((e, i) => ({
    id: i + 1,
    apartment: {
        id: "1",
        name: "Marketing"
    },
    email: "example@company.net",
    name: `User ${i + 1}`,
    address: "4th Corner, Crossway, The Moon",
    phone: "+999999999999",
    dob: "1587531216543",
    role: "admin"
}))