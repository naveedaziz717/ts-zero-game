import React from 'react'

interface categoryPageProps {
    params: {page : number}
}

export default function page({params} : categoryPageProps) {
  return (
    <div>
        {params.page}
    </div>
  )
}
