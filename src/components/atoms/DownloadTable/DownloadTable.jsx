import React from 'react'
import { GoDownload } from "react-icons/go";
import style from './DownloadTable.module.scss'

export default function DownloadTable() {
  return (
    <div className={style.downloadContainer}>
      <GoDownload />
    </div>
  )
}
