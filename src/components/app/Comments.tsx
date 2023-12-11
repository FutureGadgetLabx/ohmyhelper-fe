import { Button, Card, Textarea, User } from '@nextui-org/react'
import { useState } from 'react'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'

export default function Comments() {
  const [messages, setMessages] = useState<string[]>([]) // 留言列表
  const [newMessage, setNewMessage] = useState('') // 新留言内容

  const handleSubmit = () => {
    if (newMessage) {
      setMessages([...messages, newMessage]) // 添加新留言
      setNewMessage('') // 清空输入框
    }
  }

  return (
    <div>
      <div>
        {messages.map((message) => (
          // TODO 使用messageId作为key
          <div key={message}>
            <User
              name="留言测试11111111111111111111"
              avatarProps={{
                src: 'https://ui.shadcn.com/avatars/02.png',
              }}
              description="@16504"
              classNames={{
                name: 'font-semiBold',
              }}
            />
            <div className="text-xs text-muted-foreground mx-4">
              发表于 {dayjs(new Date()).format('YYYY年MM月DD日 HH:mm:ss')}
            </div>
            <Card className="mb-5 mt-1 p-4 mx-4 min-w-[500px]">
              {/*<CardBody className="bg-gray-100 rounded-xl"><div>{message}</div></CardBody>*/}
              {message}
            </Card>
          </div>
        ))}
      </div>

      <Textarea
        className="max-w-md"
        placeholder="写下你的留言..."
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        className="my-4"
        color="primary"
        variant="solid"
        startContent={<EnvelopeClosedIcon />}
      >
        留言
      </Button>
    </div>
  )
}
