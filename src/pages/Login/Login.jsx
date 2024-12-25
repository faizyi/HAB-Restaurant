import React from 'react'
import { Form, Input, Button } from 'antd';
import loginHook from '../../CustomHooks/LoginHook';
export const Login = () => {
  const {onFinish, onFinishFailed} = loginHook()
  return (
    <div className="flex items-center justify-center py-28 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <Form
        name="loginForm"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {/* Email Field */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
            {
              type: 'email',
              message: 'Please enter a valid email!',
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
            {
              min: 6,
              message: 'Password must be at least 6 characters!',
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600
             text-gray-900 font-medium"
          >
            Login
          </Button>
        </Form.Item>
      </Form>

      </div>
    </div>
  )
}
