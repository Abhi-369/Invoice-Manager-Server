import mongoose from 'mongoose';
import ClientData from '../model/Client.js';
import dropDown from '../model/dropDown.js';

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

export const getInvoice = async (req, res) => {
    const { id } = req.params

    try {
        const client = await ClientData.findById(id)

        if (!client) { res.status(401).json('not found') }

        res.status(200).json(client)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const getReport = async (req, res) => {

    try {
        const result = await ClientData.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const editInvoice = async (req, res) => {
    const { id } = req.params
    const { afterDelivery } = req.body
    console.log("result", afterDelivery)
    try {
        const result = await ClientData.findByIdAndUpdate(id, { afterDelivery: afterDelivery }, { new: true })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const createDropDown = async (req, res) => {
    const { id } = req.params
    const data = req.body
    console.log("result", data)
    try {
        const result = await dropDown.findOneAndUpdate(id, { $push: data }, { new: true })
        res.status(200).json(result)
        console.log("hey", result)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const getDropDown = async (req, res) => {
    try {
        const result = await dropDown.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}
