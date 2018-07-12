let users = [
    {
        id: 1,
        first_name: "Lucky",
        last_name: "Hart"
    },
    {
        id: 2,
        first_name: "Smiles",
        last_name: "Hart"
    }
];
let id = 3;

module.exports = {
    readUser: (req, res) => {
        res.status(200).send(users)
    },
    createUser: (req, res) => {
        let {first_name, last_name} = req.body;
        let user = {
            id: id++,
            first_name: first_name,
            last_name: last_name
        }
        users.push(user);
        res.status(200).send(users)
    }
}