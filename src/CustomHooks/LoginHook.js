import { login } from "../services/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
export default function loginHook() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const result = await login(values); 
      if(result.status === 200){
        message.success("Login successful!");
        navigate("/admin"); 
      }else{
        message.error(result.response.data.msg);
        return
      }
    } catch (error) {
      message.error("Login failed. Please check your credentials.");
      return
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Form validation failed. Please correct the errors and try again.");
    return
  };

  return {
    onFinish,
    onFinishFailed,
  };
}
