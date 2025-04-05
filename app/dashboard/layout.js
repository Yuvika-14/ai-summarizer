import React from 'react'
import Header from './comp/Header'
function DashboardaLayout({children}) {
  return (
    <div>
     <Header />
      {children}
    </div>
  )
}

export default DashboardaLayout
