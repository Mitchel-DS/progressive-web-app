import fetch from 'node-fetch';

const endpoint = 'https://api.github.com/repos/';
const user = 'Mitchel-DS';

const details = async (req, res) => {
	const id = req.params.id;
	console.log(id);
	try {
		const url = `${endpoint}${user}/${id}`;
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		res.render('details', { data: data });
	} catch (error) {
		error = 'Something went wrong';
	}
};

export default details;