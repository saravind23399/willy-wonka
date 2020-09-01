import Axios from "axios"
const GitlabCommunicator = Axios.create({
    baseURL: process.env.GITLAB_URL ||  "https://www.gitlab.com/api/v4",
    params: {
      access_token: process.env.GITLAB_OAUTH_TOKEN || 'gitlab-oauth-token-missing'
    },
})

export default GitlabCommunicator