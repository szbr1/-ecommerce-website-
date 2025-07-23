import multer from "multer";

const diskStorage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname); // ✅ Pass null as first arg for no error
  },
});

const upload = multer({ storage: diskStorage });

export default upload;
