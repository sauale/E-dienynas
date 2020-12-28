import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';
export const SidebarData = [
  {
    title: 'Asmeniniai duomenys',
    path: '/studProfile',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Pažymiai',
    path: '/listGrades',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Vidurkiai',
    path: '/listAverages',
    icon: <FaIcons.FaAward/>,
    cName: 'nav-text'
  },
  {
    title: 'Tvarkaraštis',
    path: '/viewSchedule',
    icon: <MdIcons.MdSchedule />,
    cName: 'nav-text'
  },
  {
    title: 'Pagyrimai ir pastabos',
    path: '/listRemarks',
    icon: <VscIcons.VscReport />,
    cName: 'nav-text'
  },
  {
    title: 'Prisijungimo duomenys',
    path: '/studLoginInfo',
    icon: <IoIcons.IoMdLogIn />,
    cName: 'nav-text'
  },
  {
    title: 'Namų darbai',
    path: '/listHomework',
    icon: <IoIcons.IoMdHome />,
    cName: 'nav-text'
  }
];