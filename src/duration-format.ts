import Utils from './utils'

type DurationType = 'seconds' | 'milliseconds'
interface DurationTime {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}
interface Duration {
  $d: DurationTime
  $t: number
  format: (formatStr: string) => string
}

const MS_PER_SECOND = 1e3
const SECONDS_PER_MIN = 60
const MINS_PER_HOUR = 60
const HOURS_PER_DAY = 24
const DAYS_PER_MONTH = 30
const DAYS_PER_YEAR = 365
const MOUTH_PER_YEAR = 12

const ONE_MS = 1
const ONE_SECOND = ONE_MS * MS_PER_SECOND // second
const ONE_MIN = ONE_SECOND * SECONDS_PER_MIN // minute
const ONE_HOUR = ONE_MIN * MINS_PER_HOUR // hour
const ONE_DAY = ONE_HOUR * HOURS_PER_DAY // day
const ONE_MONTH = ONE_DAY * DAYS_PER_MONTH // month
const ONE_YEAR = ONE_DAY * DAYS_PER_YEAR // year

const YEARS = 0
const MONTHS = 1
const DAYS = 2
const HOURS = 3
const MINUTES = 4
const SECONDS = 5
const MILLISECONDS = 6
const matchRules = [
  { label: 'Y', name: 'years', per: ONE_YEAR, next: MOUTH_PER_YEAR },
  { label: 'M', name: 'months', per: ONE_MONTH, next: DAYS_PER_MONTH },
  { label: 'D', name: 'days', per: ONE_DAY, next: HOURS_PER_DAY },
  { label: 'H', name: 'hours', per: ONE_HOUR, next: MINS_PER_HOUR },
  { label: 'm', name: 'minutes', per: ONE_MIN, next: SECONDS_PER_MIN },
  { label: 's', name: 'seconds', per: ONE_SECOND, next: MS_PER_SECOND },
  { label: 'SSS', name: 'milliseconds', per: ONE_MS, next: ONE_MS },
]
const RULES_LENGTH = matchRules.length
const floor = Math.floor
const REGEX_FORMAT = /\[([^\]]+)]|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g

const TIME_TRANSFORM = {
  milliseconds(ms: number): DurationTime {
    return matchRules.reduce((cur, { name, per }) => {
      cur[name] = floor(ms / per)
      ms = ms % per
      return cur
    }, {} as DurationTime)
  },

  seconds(seconds: number): DurationTime {
    return this.milliseconds(seconds * 1000)
  },
}

export const duration = (t: unknown, type: DurationType = 'milliseconds'): Duration => {
  if (typeof t !== 'number') {
    throw new TypeError('Expected a number')
  }

  const formatFunc = TIME_TRANSFORM[type]

  if (!formatFunc) {
    throw new TypeError('Expected a string in milliseconds|seconds')
  }

  const dur = formatFunc.call(TIME_TRANSFORM, Math.abs(t < 0 ? 0 : t))

  return {
    $d: dur,
    $t: t,
    format(formatStr = 'HH:mm:ss-SSS') {
      const visited = Utils.l(RULES_LENGTH, false)
      const dates = Utils.l(RULES_LENGTH, 0)
      let t = 0

      matchRules.forEach(({ label, name, next }, pos) => {
        if (!formatStr.match(label)) {
          t += dur[name] * next
          return
        }

        if (!visited[pos]) {
          dates[pos] = t + dur[name]
          t = 0
          visited[pos] = true
        }
      })

      const matches = {
        Y: String(dates[YEARS]),
        M: Utils.z(dates[MONTHS]),
        MM: Utils.z(dates[MONTHS]),
        D: String(dates[DAYS]),
        DD: Utils.z(dates[DAYS]),
        H: String(dates[HOURS]),
        HH: Utils.z(dates[HOURS]),
        m: String(dates[MINUTES]),
        mm: Utils.z(dates[MINUTES]),
        s: String(dates[SECONDS]),
        ss: Utils.z(dates[SECONDS]),
        SSS: Utils.z(dates[MILLISECONDS], 3),
      }

      // replace $1
      return formatStr.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match])
    },
  }
}
