import { Upload } from "antd";
import "./afterlaunch.css";
const { Dragger } = Upload;

export default function MyDragger(props) {
  return <Dragger {...props} />;
}
