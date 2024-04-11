import axios from "axios";
import { useEffect, useState } from "react";

function Student() {
	// Logic
	/*
		const [studentid, setId] = useState("");
		const [studentname, setName] = useState("");
		const [studentaddress, setAddress] = useState("");
		const [mobile, setMobile] = useState("");*/
	const [students, setStudents] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8089/api/v1/student/')
			.then(response => {
				setStudents(response.data);
				console.log('The data got is: ', response)
			})
			.catch(error => {
				if (error.response) {
					// La respuesta fue hecha y el servidor respondió con un código de estado
					// que esta fuera del rango de 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// La petición fue hecha pero no se recibió respuesta
					// `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
					// http.ClientRequest en node.js
					console.error('Hubo un error al obtener los datos: ');
					console.log(error.request);
				}
			});
	}, []);
	/*
		async function save(event) {
			event.preventDefault();
			try {
				await axios.post("http://localhost:8089/api/v1/student/save", {
					studentname: studentname,
					studentaddress: studentaddress,
					mobile: mobile,
				});
				alert("Student Registation Successfully");
				setId("");
				setName("");
				setAddress("");
				setMobile("");
				Load();
			} catch (err) {
				alert("User Registation Failed");
			}
		}
	
		async function editStudent(students) {
			setName(students.studentname);
			setAddress(students.studentaddress);
			setMobile(students.mobile);
			setId(students._id);
		}
	
		async function DeleteStudent(studentid) {
			await axios.delete(
				"http://localhost:8089/api/v1/student/delete/" + studentid
			);
			alert("Student deleted Successfully");
			Load();
		}
	
		async function update(event) {
			event.preventDefault();
	
			try {
				await axios.put(
					"http://localhost:8089/api/v1/student/edit/" + studentid,
					{
						studentname: studentname,
						studentaddress: studentaddress,
						mobile: mobile,
					}
				);
				alert("Registation Updated");
				setId("");
				setName("");
				setAddress("");
				setMobile("");
				Load();
			} catch (err) {
				alert("Student Update Failed");
			}
		}
	
		// Design
	
		return (
			<div>
				<h1>Student Details</h1>
				<div className="container mt-4">
					<form>
						<div className="form-group">
							<label>Student Name</label>
							<input
								type="text"
								className="form-control"
								id="studentname"
								value={studentname}
								onChange={(event) => {
									setName(event.target.value);
								}}
							/>
						</div>
	
						<div className="form-group">
							<label>Student Address</label>
							<input
								type="text"
								className="form-control"
								id="studentaddress"
								value={studentaddress}
								onChange={(event) => {
									setAddress(event.target.value);
								}}
							/>
						</div>
	
						<div className="form-group">
							<label>Mobile</label>
							<input
								type="text"
								className="form-control"
								id="mobile"
								value={mobile}
								onChange={(event) => {
									setMobile(event.target.value);
								}}
							/>
						</div>
						<div>
							<button className="btn btn-primary mt-4" onClick={save}>
								Register
							</button>
	
							<button className="btn btn-warning mt-4" onClick={update}>
								Update
							</button>
						</div>
					</form>
				</div>*/
	<br />
	return (
		<table className="table table-dark" align="center">
			<thead>
				<tr>
					<th scope="col">Student Name</th>
					<th scope="col">Student Address</th>
					<th scope="col">Student Mobile</th>

					<th scope="col">Option</th>
				</tr>
			</thead>
			<tbody>
				{students.map((student, index) => (
					<tr key={index}>
						<td>{student.studentname}</td>
						<td>{student.studentaddress}</td>
						<td>{student.mobile}</td>
						{/* <td>
								<button
									type="button"
									className="btn btn-warning"
									onClick={() => editStudent(student)}
								>
									Edit
								</button>
								<button
									type="button"
									className="btn btn-danger"
									onClick={() => DeleteStudent(student._id)}
								>
									Delete
								</button>
							</td> */}
					</tr>
				))}
			</tbody>
		</table>
		//</div>
	);
}

export default Student;
