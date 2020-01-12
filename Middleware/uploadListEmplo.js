import multer from "multer";
import path from "path";
const destination = (req, file, cb) => {
  cb(null, "uploads/");
};
const filename = (req, file, cb) => {
  cb(null, Date.now() + "-" + file.originalname);
};
const fileFilter = (req, file, cb) => {
  const fileTypes = /XLSX|xlsx/;
  const extName = fileTypes.test(path.extname(file.originalname));
  if (extName) {
    cb(null, true);
  } else {
    cb(new Error("only XLSX allowed"));
  }
};
const storage = multer.diskStorage({
  destination: destination,
  filename: filename
});

let upload = multer({ storage, fileFilter });

export { upload as default };
