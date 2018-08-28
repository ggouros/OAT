/**
 * onload event of the main page body
 */
function onload() {
	loadNavbar();
}

/**
 * Generic GET request
 * @param {String}
 * @param {Function}
 */
function getDoc(url, cFunction) {
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			cFunction(this);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

/**
 * request user list from the server
 */
function getUsers() {
	getDoc("https://hr.oat.taocloud.org/v1/users", showUsers);
}

/**
 * append the users to the DOM
 * @param {XMLHttpRequest}
 */
function showUsers(xhttp) {
	users = JSON.parse(xhttp.responseText);

	str = `	<div class="container-fluid">
				<div class="row">`
	for (const user in users) {
		str += `<div class="col-sm">
						<div class="card" onclick="getUser(${users[user].userId})">
							<ul class="list-group list-group-flush">
								<li class="list-group-item"> Lastname: ${users[user].lastName} </li>
								<li class="list-group-item"> Firstname: ${users[user].firstName} </li>
							</ul>
						</div>
					</div>`;
	}
	str += `	</div>
			</div>`;

	document.getElementsByClassName("users")[0].innerHTML = str;
}

/**
 * request a single user from the server
 */
function getUser(userId) {
	getDoc("https://hr.oat.taocloud.org/v1/user/" + userId, showUser);
}

/**
 * append a single user to the DOM
 * @param {XMLHttpRequest}
 */
function showUser(xhttp) {
	user = JSON.parse(xhttp.responseText);

	str = `	<div class="container-fluid">
				<div class="row">
					<div class="col-sm">
						<div class="card mx-auto">
							<img class="card-img-top" src=" ${user.picture} " alt="picture">
							<ul class="list-group list-group-flush">
								<li class="list-group-item"> Title: ${user.title} </li>
								<li class="list-group-item"> Lastname: ${user.lastName} </li>
								<li class="list-group-item"> Firstname: ${user.firstName} </li>
								<li class="list-group-item"> Gender: ${user.gender} </li>
								<li class="list-group-item"> Email: ${user.email} </li>
								<li class="list-group-item"> Address: ${user.address} </li>
							</ul>
						</div>
					</div>
				</div>
			</div>`;

	document.getElementsByClassName("users")[0].innerHTML = str;
}