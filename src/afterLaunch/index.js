import { useState } from "react";
import "./afterlaunch.css";

import { message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Dragger from "./CustomDragger";

const client = "https://ipfs.infura.io:5001/api/v0/add";

const AfterLaunch = () => {
  const [files, setFiles] = useState([]);
  const props = {
    name: "file",
    multiple: true,
    action: client,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        setFiles(info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {},
  };
  if (files.length) console.log(files);

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
        {files.length ? (
          <ul className="hash-list">
            {files.map((file) => (
              <li key={file.uid}>
                <span> {file.response.Hash}</span>
                <span> {file.response.Name}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default AfterLaunch;
