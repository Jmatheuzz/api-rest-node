import multer from 'multer';
import {extname, resolve} from 'path';

const rand = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, callback) =>{
    if(file.mimetype !== 'image/pgn' && file.mimetype !== 'image/jpeg'){
      callback(new multer.MulterError('Foto deve ser PNG ou JPEG'));
    }

    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) =>{
      callback(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, callback) =>{
      callback(null, `${Date.now()}_${rand()}${extname(file.originalname)}`);
    },
  }),
}
