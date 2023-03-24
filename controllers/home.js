import fetch from 'node-fetch';

const endpoint = 'https://api.github.com/users/';
const user = 'Mitchel-DS';

const fetchData = async (req, res) => {
	try {
		const url = `${endpoint}${user}/repos`;
	  	const response = await fetch(url);
	  	const data = await response.json();
		res.render('index', { data: data });
	} catch (error) {
	  console.log(error);
	  res.status(500).send({ error: 'Something went wrong' });
	}
  };

const showLoading = (req, res) => {
	loading.style.display = 'flex';
};

  export { fetchData, showLoading };