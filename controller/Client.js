import mongoose from 'mongoose';
import ClientData from '../model/Client.js';

export const create = async (req, res) => {
    const data = req.body
    const newClient = new ClientData(data)
    try {
        await newClient.save()
        res.status(201).json(newClient)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const get = async (req, res) => {
    // const { id } = req.params
    const { name } = req.query
    console.log(name)

    try {
        const client = await ClientData.findOne({ username: name }) || await ClientData.findOne({ number: Number(name) })

        if (!client) { res.status(401).json('not found') }

        res.status(200).json(client)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}