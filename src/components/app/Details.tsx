interface HeadDetailsProps {
  id?: string
}

export const HeadDetails = (props: HeadDetailsProps) => {
  console.log(props.id)
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">App标题</h1>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        每日自动完成哔哩哔哩日常任务，如观看视频，分享视频，投币等。
      </blockquote>
      <div className="py-4 grid grid-cols-3">
        <div className="grid grid-cols-2 gap-0">
          <span id="email">作者</span>
          <span>Your email address</span>
        </div>
      </div>
    </>
  )
}
