import {NextApiRequest, NextApiResponse} from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Thiago'},
        {id: 2, name: 'Diego'},
        {id: 3, name: 'Rafa'},
    ]

    return response.json(users)
}