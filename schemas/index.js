import mongoose from 'mongoose';

export default () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useFindAndModify: false
      },
      error => {
        if (error) {
          console.log('몽고디비 연결 에러', error);
        } else {
          console.log('몽고디비 연결 성공');
        }
      }
    );
  };
  connect();
  mongoose.connection.on('error', error => {
    console.error('몽고디비 연결 에러', error);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('몽고디비 연결이 끊어졌습니다. 재연결 시도');
    connect();
  });

  require('./chat');
  require('./room');
};
