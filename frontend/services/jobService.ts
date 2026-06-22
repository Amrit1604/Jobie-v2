// @ts-nocheck
import { Job } from "../types/Job"
import { API_BASE_URL } from "../lib/api"

const API_URL = `${API_BASE_URL}/api/jobs`

export const getJobs = async (): Promise<Job[]> => {
  const res = await fetch(API_URL)
  return res.json()
}


