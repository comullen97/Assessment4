let jumps = [
    {
        task: "Check weather",
        complete: "Day-before"
    },
    {
        task: "Pack Altimeter",
        complete: "Night-before"
    }
]


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Don't live with regrets!", "It's a good day to fly!", "Keep your chin up! Literally.", "Treat yourself to sushi after this jump!", "You got this!"];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getAll: (req,res) => {
        res.status(200).send(jumps)
    },
    createjumpStep: (req,res) => {
        let newStep = {...req.body, id:priority}
        console.log(newStep)
        jumps.push(newStep)
        res.status(200).send(jumps)
    },
    updatedjumpNumber: (req,res) => {
        let { type } = req.body
        let { id } = req.params

        let index = jumps.findIndex(jumps)

        if(type === "minus" && )
    },
    deletejumpStep: (req,res) => {
        let { id } = req.params

        res.status(200).send(jumps)
    }
}
