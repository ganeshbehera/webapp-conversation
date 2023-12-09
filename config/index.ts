import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Health AI Demo',
  description: 'HealthAI Powered by DigitbiteAI stands at the nexus of AI innovation and practical application. Founded to empower businesses in the digital era, our expert team crafts tailored AI solutions that drive growth and efficiency. With DigitbiteAI, experience where cutting-edge meets real-world impact.',
  copyright: '2023',
  privacy_policy: 'https://digitbiteai.co.uk/privacy-policy/',
  default_language: 'en',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
