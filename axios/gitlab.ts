import Axios from "axios"
console.log(process.env.GITLAB_URL)
const GitlabCommunicator = Axios.create({
    baseURL: process.env.GITLAB_URL ||  "https://www.gitlab.com/api/v4",
    headers: {
      Authorization: `Bearer ${process.env.GITLAB_OAUTH_TOKEN || 'gitlab-oauth-token-missing'}`
    }
})

export default GitlabCommunicator