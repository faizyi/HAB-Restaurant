import React from 'react'
import { HeroSection } from '../../components/HeroSection'
import { MenuItems } from '../../components/MenuItems'
import { Services } from '../../components/Services'
import { MapLocation } from '../../components/MapLocation'
export const Home = () => {
  return (
    <>
    <HeroSection/>
    <MenuItems/>
    <Services/>
    <MapLocation/>
    </>
  )
}
