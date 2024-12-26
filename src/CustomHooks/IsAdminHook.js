import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const IsAdminHook = () => {
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
      };
      const handleDrawerClose = () => {
        setIsDrawerOpen(false);
      };
    useEffect(()=>{
        const admin = JSON.parse(localStorage.getItem('adminData'));
        setIsAdminLoggedIn(!!admin);
    })
    const handleLogout = ()=>{
        localStorage.removeItem('adminData');
        setIsAdminLoggedIn(false);
        navigate('/login');
    }
  return {
    isAdminLoggedIn,
    handleDrawerOpen,
    handleDrawerClose,
    isDrawerOpen,
    path,
    navigate,
    handleLogout
  }
}
