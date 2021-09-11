import "./afterlaunch.css";
import { message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Dragger from "./CustomDragger";
// const { Dragger } = Upload;

const client = "https://ipfs.infura.io:5001/api/v0/add";

const props = {
  name: "file",
  multiple: true,
  action: client,
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AfterLaunch = ({ totalSupply, account, mint }) => {
  return (
    <div name="buysloths" className="section2-main-wrapper">
      <div className="section2-inner-wrapper">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </div>
    </div>
  );
};

export default AfterLaunch;
