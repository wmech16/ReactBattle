var axios = require('axios');

function getProfile(username) {
	return axios.get('https://api.github.com/users/' + username)
		.then(function(user) {
			return user.data;
		})
}

module.exports = {
	battle: function(players) {

	},

	fetchPopularRepos: function(language) {
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

		return axios.get(encodedURI)
			.then(function(resp) {
				return resp.data.items;
			});
	}
}
