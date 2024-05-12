import { Request, Response } from "express";
import { CreateVendorDto } from "../dto/vendor.dto";
import { Vendor } from "../models";

export const createVendor = async (req: Request, res: Response) => {
    const { name, ownerName, foodType, pincode, address, email, password, phone } = <CreateVendorDto>req.body;

    const exitingVendoer = await Vendor.findOne({ email });

    if (exitingVendoer)
        res.status(400).json({ message: "A vendor is exits with this email id" });

    const createVendor = await Vendor.create({
        name,
        ownerName,
        foodType,
        pincode,
        address,
        phone,
        email,
        password,
        serviceAvailable: false,
        coverImage: [],
        rating: 0,
    })
    res.status(201).json({ status: "success", data: createVendor })

}

export const getVendors = async (req: Request, res: Response) => {

}

export const getVendorById = async (req: Request, res: Response) => {

}