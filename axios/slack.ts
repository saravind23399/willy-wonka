import Axios from "axios"
const SlackCommunicator = Axios.create({
    baseURL: process.env.SLACK_BOT_WEBHOOK_URL
})

export default SlackCommunicator