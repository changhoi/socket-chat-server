import express from 'express';
const router = express.Router();
import Room from '../schemas/room';
import Chat from '../schemas/chat';

const users = ['chkim', 'urkim', 'djlim'];

router.post('', async (req, res, next) => {
  if (users.length) {
    try {
      const newRoom = await Room.create({
        member: users
      });
      res.status(200).json(JSON.stringify(newRoom));
    } catch (e) {
      console.error(e);
      next(err);
    }
  } else {
    next(new Error('채팅방 생성: 잘못된 접근'));
  }
  // 채팅방 만들기
});

router.get(
  '/:id',
  async (req, res, next) => {
    try {
      const _id = req.params.id;
      const chats = await Chat.find({ room: _id });
      const room = await Room.findById(_id);

      const data = {
        member: room.member,
        chats
      };
      res.status(200).json(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
  // 채팅방 정보
);

router.delete('/:id', (req, res) => {
  // 사용자가 나간 경우 vs 사용자가 없는 경우(채팅방 아예 삭제)
  // 채팅방 없애기
});

router.post('/:id/chats', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user, chat, img } = req.body;
    const newChat = await Chat.create({
      room: id,
      user,
      chat,
      img
    });
    res.status(200).json(newChat);
  } catch (e) {
    console.error(e);
    next(e);
  }

  // 채팅 만들기
});

export default router;
