const mongoose = require('mongoose');

const customerDetailsSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phone_Number: {
        type: String,
        required: true
    },
    Pincode: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    LandMark: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const customerDetails = mongoose.model('customerDetailSchema', customerDetailsSchema);

class customerDetailsModels {
    createCustomerDetails(data, callback) {
        let details = new customerDetails({
            Name: data.Name,
            Phone_Number: data.Phone_Number,
            Pincode: data.Pincode,
            Address: data.Address,
            city: data.city,
            LandMark: data.LandMark,
            Email: data.Email,
            Type: data.Type
        });

        return new Promise((resolve, reject) => {
            details.save((err, result) => {
                if (err) {
                    reject(500);
                } else {
                    console.log(result);
                    resolve(result)
                }
            });
        })
    }
}

module.exports = new customerDetailsModels();