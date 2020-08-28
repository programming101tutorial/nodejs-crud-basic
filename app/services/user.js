const User = require('../models/user');
const { json } = require('body-parser');

module.exports = {
    create: async (data) => {
        try {
            const {name, gender, phone, email} = data;
            const user = await User.create({
                name: name,
                gender: gender,
                phone: phone,
                email: email
            });
            return user;
        } catch (error) {
            return ({error});
        }
    },
    read: async () => {
        const user = await User.find({});
        return user;
    },
    update: async (id, data) => {
        try {
            const {name, gender, phone, email} = data;
            const user = await User.findById(id);
            user.name = name;
            user.gender = gender;
            user.phone = phone;
            user.email = email;
            await user.save();
            return user;
        } catch (error) {
            return ({error});
        }
    },
    delete: async (id) => {
        try {
            const user = await User.deleteOne({_id: id});
            return user;
        } catch (error) {
            return ({error});
        }
    }
};