import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import {
  ArchiveIcon,
  CalendarIcon,
  Cross2Icon,
  PlusIcon,
  RocketIcon,
} from '@radix-ui/react-icons'
import { useRecoilState } from 'recoil'
import { AppDetail } from '@/requests/app.ts'
import { appDetailRecoilState } from '@/recoil/atom.ts'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { getJobConfig } from '@/requests/jobConfig.ts'
import '@/mocks/app.ts'

export interface JobConfig {
  jobConfigId: string
  appId?: string
  settings?: any
  version: string
  cron: string
}

export default function Settings() {
  const [appDetail] = useRecoilState<AppDetail>(appDetailRecoilState)

  const params = JSON.parse(appDetail.params)

  // 提供一个初始值
  const initialJobConfig = {
    jobConfigId: '',
    appId: '',
    version: '',
    cron: '',
    settings: {},
  }

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm()
  const [jobConfig, setJobConfig] = useState<JobConfig>(initialJobConfig)

  useEffect(() => {
    const fetchJobConfig = async () => {
      try {
        const response = await getJobConfig(appDetail.appId, '1')
        setJobConfig(response.data)
        setValue('version', response.data.version)
        setValue('cron', response.data.cron)
        for (const [key, value] of Object.entries(response.data.settings)) {
          setValue(key, value)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchJobConfig()
  }, [jobConfig.jobConfigId, setValue])

  function onSubmit(data: any) {
    console.log(data)
  }

  const [show, setShow] = useState(jobConfig.jobConfigId !== '')

  return show ? (
    <div className="flex justify-center items-center min-h-[500px]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center my-10 text-muted-foreground text-2xl">
          Oops!你还没有创建任务
        </div>
        <Button
          variant="bordered"
          className="bg-foreground text-background ml-2"
          startContent={<PlusIcon />}
          onClick={() => setShow(true)}
        >
          创建我的任务
        </Button>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 items-center justify-center">
        <Controller
          name="version"
          control={control}
          defaultValue={jobConfig.version || appDetail.versions[0]} // 使用默认值
          render={({ field: { onChange, value } }) => (
            <Select
              startContent={<ArchiveIcon />}
              isRequired
              value={value}
              onChange={e => onChange(e.target.value)}
              selectedKeys={[value]}
              classNames={{
                mainWrapper: 'max-w-xs pb-3',
                label: 'pb-4',
              }}
              variant="bordered"
              labelPlacement="outside"
              label="应用版本"
              placeholder="应用版本"
              description="请选择创建的应用版本"
            >
              {appDetail.versions.map(version => (
                <SelectItem key={version} value={version}>
                  {version}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <Controller
          name="cron"
          control={control}
          defaultValue={jobConfig.cron || ''}
          render={({ field }) => (
            <Input
              startContent={<CalendarIcon />}
              isRequired
              label="任务定时"
              variant="bordered"
              labelPlacement="outside"
              placeholder="定时任务Cron表达式"
              description="根据Cron表达式设置定时任务的执行间隔"
              className="max-w-xs my-2"
              {...field}
            />
          )}
        />
      </div>

      <div className="grid grid-cols-3 items-center">
        {Object.entries(params).map(([key, value]) => (
          <Controller
            key={key}
            control={control}
            name={key}
            defaultValue={jobConfig.settings[key] || ''}
            render={({ field }) => (
              <Input
                {...field}
                isRequired
                label={key}
                variant="bordered"
                labelPlacement="outside"
                placeholder={value as string}
                description={value as string}
                className="max-w-xs my-2"
                isInvalid={errors[key] !== undefined}
                errorMessage={errors[key] !== undefined && key + '不合法'}
              />
            )}
          />
        ))}
      </div>

      <Button
        className="mt-4"
        type="submit"
        color="primary"
        startContent={<RocketIcon />}
      >
        {jobConfig ? '更新任务' : '创建任务'}
      </Button>

      {jobConfig && (
        <Button
          className="mt-4 ml-4"
          variant="ghost"
          onClick={() => setShow(false)}
          startContent={<Cross2Icon />}
        >
          取消
        </Button>
      )}
    </form>
  )
}
