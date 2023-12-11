import axios from 'axios'
import {JobConfig} from "@/components/app/Settings.tsx";

export const getJobConfig = (appId: string, version: string) =>
  axios.get<JobConfig>(`/api/jobs/config?appId=${appId}&version=${version}`, {})
