const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
);

module.export = model("Quality", schema);
