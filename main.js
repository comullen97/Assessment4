const complimentBtn = document.getElementById("complimentButton")
const mainContainer = document.querySelector("#main-container")
const jumpCount = document.querySelector("#jump-count")

const form = document.querySelector('form')
const input = document.querySelector('input')


const baseURL = `http://localhost:4000/api/jumps`

const jumpCallback = ({ data : jumps }) => displayJumps(jumps)
const errCallback = err => console.log(err.response.data)

const getAll = () => axios.get(baseURL).then(jumpCallback).catch(errCallback)
const createjumpStep = body => axios.post(baseURL, body).then(jumpCallback).catch(errCallback)
const deletejumpStep = id => axios.delete(`${baseURL}/${id}`).then(jumpCallback).catch(errCallback)
const updatedjumpNumber = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(jumpCallback).catch(errCallback)


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


function submitHandler(e) {
    e.preventDefault()

    let task = document.querySelector("#toDo")
    let complete = document.querySelector('#priority')

    let bodyObj ={
        task: task.value,
        complete: complete.value
    }

    createjumpStep(bodyObj)

    task.value = ''
    complete.value = ''
}

function createTaskCard(jumps) {
    const jumpTask = document.createElement('div')
    jumpTask.classList.add('task-card')

    jumpTask.innerHTML = `<p class="jump-task">${jumps.task}</p>
    <p class="task-priority>${jumps.time}</p>
    <button onclick="deletejumpStep(${jump.id})>Delete</button>`

    mainContainer.appendChild(jumpTask)
}

function displayJumps(arr) {
    mainContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTaskCard(arr[i])
    }
}





list.addEventListener('submit', submitHandler)

complimentBtn.addEventListener('click', getCompliment)

getAll()
