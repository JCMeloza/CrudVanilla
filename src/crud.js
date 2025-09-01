import { formatPostcssSourceMap } from "vite";
import { getUsers, deleteUsers, updateUser } from "./api.js";

let editUser = null;
const form = document.getElementById("form");
//renderUsers
const renderUsers = async () => {
	const users = await getUsers();
	const userList = document.getElementById("user-list");
	users.forEach((user) => {
		const element = document.createElement("li");
		element.innerHTML = `<span>${user.name} (${user.email})</span>
        <button type="button" class="edit" data-id="${user.id}">Eliminar</button>`;
		userList.appendChild(element);
	});
};
//manejar el submit
const handleSubmit = async (event) => {
	event.preventDefault();
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;

	await updateUser({ name, email, id: editUser.id });
	form.reset();
	renderUsers();
};
//manejar el edit
const handleEdit = async (id, name, email) => {
	editUser = { id, name, email };
	document.getElementById("name").value = name;
	document.getElementById("email").value = email;
};

//manejar el delete
const handleDelete = async (id) => {
	await deleteUsers(id);
	renderUsers();
};

//agregar eventos al html

form.addEventListener("submit", handleSubmit);

userList.addEventListener("click", (event) => {
	const target = event.target;
	if (target.classList.contains("edit")) {
		const id = target.getAtribute("data-id");
		const user = Array.from(target.parentNode.children)[0].innerHTML.split(" (");
		const name = user[0];
		const email = user[1].replace(")", "");

		handleEdit(id, name, email);
	} else if (target.classList.contains("delete")) {
		const id = target.getAtribute("data-id");
		handleDelete(id);
	}
});

renderUsers();
