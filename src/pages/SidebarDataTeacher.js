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
    path: '/teachProfile',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Mokinių peržiūra',
    path: '/studList',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Pažymių įrašymas',
    path: '/addMarks',
    icon: <FaIcons.FaAward/>,
    cName: 'nav-text'
  },
  {
    title: 'Namų darbų uždavimas',
    path: '/addHomework',
    icon: <MdIcons.MdSchedule />,
    cName: 'nav-text'
  },
  {
    title: 'Pridėti pagyrimą/pastabą',
    path: '/addRemarks',
    icon: <VscIcons.VscReport />,
    cName: 'nav-text'
  },
];