const mongoose = require('mongoose');
const User = require('../app/services/user');
const mongoDB = process.env.MONGO_URL;
 
describe('insert', () => {
  let connection;
  let db;
 
  beforeAll(async (done) => {
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
    done();
  });

  test('insert user', async (done) => {
    const data = {
        name: 'Mengty',
        gender: 'Male', 
        phone: '0964747115', 
        email: 'vongmengty55@gmail.com'
    }
    const user = await User.create(data);
    const errorUser = await User.create(34,'sf');
    expect(typeof(user)).toEqual('object');
    expect(typeof(errorUser.error)).toEqual('object');
    done();
  });
  test('gets user', async(done) => {
      const user = await User.read();
      expect(typeof(user)).toEqual('object');
      done();
  })
  test('update user', async (done) => {
    const data = {
        name: 'Mengty',
        gender: 'Male', 
        phone: '0964747115', 
        email: 'vongmengty55@gmail.com'
    }
    const user = await User.create(data);
    user.name = 'test';
    const updateUser = await User.update(user._id, user);
    const errorUser = await User.update(34, user);
    expect(typeof(user)).toEqual('object');
    expect(user.name).toEqual('test');
    expect(typeof(errorUser.error)).toEqual('object');
    done();
  });
  test('delete user', async (done) => {
    const data = {
        name: 'Mengty',
        gender: 'Male', 
        phone: '0964747115', 
        email: 'vongmengty55@gmail.com'
    }
    const user = await User.create(data);
    const deleteUser = await User.delete(user._id);
    const errorUser = await User.delete('234');
    expect(typeof(deleteUser)).toEqual('object');
    expect(typeof(errorUser.error)).toEqual('object');
    done();
  });
 
  afterAll(async (done) => {
    // await connection.close();
    mongoose.connection.close();
    done()
  });
});