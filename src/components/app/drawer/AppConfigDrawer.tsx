import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AppDetail } from '@/requests/app.ts'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { useEffect, useState } from 'react'

export const AppConfigDrawer = (app: AppDetail) => {
  let params = {}
  try {
    if (app?.params != null) {
      params = JSON.parse(app?.params)
    }
  } catch (error) {
    console.error(error)
  }
  const [selectedVersion, setSelectedVersion] = useState(
    app?.versions?.[0] ?? ''
  )
  useEffect(() => {
    if (app?.versions?.[0]) {
      setSelectedVersion(app?.versions?.[0])
    }
  }, [app?.versions])

  // TODO 在选择版本后查询版本的环境变量
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>创建我的任务</Button>
      </SheetTrigger>
      <SheetContent className="w-[800px] overflow-auto">
        <SheetHeader>
          <SheetTitle>编辑任务配置</SheetTitle>
          <SheetDescription>
            在这里配置你的任务环境变量，点击【保存】提交配置并创建任务
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-left">镜像版本</Label>
            <Select
              value={selectedVersion}
              onValueChange={v => setSelectedVersion(v)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder="请选择版本"
                  defaultValue={selectedVersion}
                />
              </SelectTrigger>
              <SelectContent defaultValue={selectedVersion}>
                <SelectGroup defaultValue={selectedVersion}>
                  {app?.versions?.map(version => (
                    <SelectItem key={version} value={version}>
                      {version}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="divider">
            <span className="divider-text text-muted-foreground text-sm">
              环境变量
            </span>
          </div>
          {Object.entries(params).map(([key, value]) => (
            <div className="grid grid-cols-1 items-center" key={key}>
              <Label htmlFor={key} className="text-left py-2">
                {key}
              </Label>
              <Input
                id={key}
                placeholder={value as string}
                className="col-span-3"
              />
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">保存</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
