import { Schema, Document, SchemaTypes, model } from "mongoose";
import bcrypt from "bcrypt";

interface VendorDoc extends Document {
    name: string;
    ownerName: string;
    foodType: string;
    pincode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
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
    serviceAvailable: { type: Boolean },
    coverImage: [{ type: [String] }],
    rating: { type: Number },
    // foods: [{
    //     type: SchemaTypes.ObjectId,
    //     ref: "food"
    // }]
},
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
                delete ret.__v;
                delete ret.createdAt;
                delete ret.updatedAt;
            }
        },
        timestamps: true
    }
);

// storing hashed password in db
// @ts-ignore
vendorSchema.pre('save', async function (next: NextFunction) {
    // @ts-ignore
    if (this.password && this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

// login flow check password 
vendorSchema.methods.verifyPassword = async function (password: string) {
    try {
        var result = await bcrypt.compare(password, this.password);
        return result;
    } catch (error) {
        return error;
    }
};

export const Vendor = model<VendorDoc>("vendor", vendorSchema);