import { Schema, Document, SchemaTypes, model } from "mongoose";

interface VendorDoc extends Document {
    name: string;
    ownerName: string;
    foodType: string;
    pincode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    serviceAvailable: boolean,
    coverImage: [string],
    rating: number,
    // foods: any
}


const vendorSchema = new Schema({
    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    foodType: { type: [String] },
    pincode: { type: String, required: true },
    address: { type: String },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    serviceAvailable: { type: Boolean },
    coverImage: [{ type: [String] }],
    rating: { type: Number },
    // foods: [{
    //     type: SchemaTypes.ObjectId,
    //     ref: "food"
    // }]
},
    { timestamps: true }
);

export const Vendor = model<VendorDoc>("vendor", vendorSchema);