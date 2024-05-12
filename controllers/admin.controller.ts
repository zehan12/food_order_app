import { Request, Response } from "express";
import { CreateVendorDto } from "../dto/vendor.dto";

export const createVendor = async (req: Request, res: Response) => {
    const { name, ownerName, foodType, pincode, address, email, password, phone } = <CreateVendorDto>req.body;
    res.json({ name, ownerName, foodType, pincode, address, email, password, phone })

}

export const getVendors = async (req: Request, res: Response) => {

}

export const getVendorById = async (req: Request, res: Response) => {

}