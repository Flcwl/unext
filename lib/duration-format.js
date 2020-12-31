"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duration = void 0;
var utils_1 = require("./utils");
var MS_PER_SECOND = 1e3;
var SECONDS_PER_MIN = 60;
var MINS_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var DAYS_PER_MONTH = 30;
var DAYS_PER_YEAR = 365;
var MOUTH_PER_YEAR = 12;
var ONE_MS = 1;
var ONE_SECOND = ONE_MS * MS_PER_SECOND; // second
var ONE_MIN = ONE_SECOND * SECONDS_PER_MIN; // minute
var ONE_HOUR = ONE_MIN * MINS_PER_HOUR; // hour
var ONE_DAY = ONE_HOUR * HOURS_PER_DAY; // day
var ONE_MONTH = ONE_DAY * DAYS_PER_MONTH; // month
var ONE_YEAR = ONE_DAY * DAYS_PER_YEAR; // year
var YEARS = 0;
var MONTHS = 1;
var DAYS = 2;
var HOURS = 3;
var MINUTES = 4;
var SECONDS = 5;
var MILLISECONDS = 6;
var matchRules = [
    { label: 'Y', name: 'years', per: ONE_YEAR, next: MOUTH_PER_YEAR },
    { label: 'M', name: 'months', per: ONE_MONTH, next: DAYS_PER_MONTH },
    { label: 'D', name: 'days', per: ONE_DAY, next: HOURS_PER_DAY },
    { label: 'H', name: 'hours', per: ONE_HOUR, next: MINS_PER_HOUR },
    { label: 'm', name: 'minutes', per: ONE_MIN, next: SECONDS_PER_MIN },
    { label: 's', name: 'seconds', per: ONE_SECOND, next: MS_PER_SECOND },
    { label: 'SSS', name: 'milliseconds', per: ONE_MS, next: ONE_MS },
];
var RULES_LENGTH = matchRules.length;
var floor = Math.floor;
var REGEX_FORMAT = /\[([^\]]+)]|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g;
var TIME_TRANSFORM = {
    milliseconds: function (ms) {
        return matchRules.reduce(function (cur, _a) {
            var name = _a.name, per = _a.per;
            cur[name] = floor(ms / per);
            ms = ms % per;
            return cur;
        }, {});
    },
    seconds: function (seconds) {
        return this.milliseconds(seconds * 1000);
    },
};
exports.duration = function (t, type) {
    if (type === void 0) { type = 'milliseconds'; }
    if (typeof t !== 'number') {
        throw new TypeError('Expected a number');
    }
    var formatFunc = TIME_TRANSFORM[type];
    if (!formatFunc) {
        throw new TypeError('Expected a string in milliseconds|seconds');
    }
    var dur = formatFunc.call(TIME_TRANSFORM, Math.abs(t < 0 ? 0 : t));
    return {
        $d: dur,
        $t: t,
        format: function (formatStr) {
            if (formatStr === void 0) { formatStr = 'HH:mm:ss-SSS'; }
            var visited = utils_1.default.l(RULES_LENGTH, false);
            var dates = utils_1.default.l(RULES_LENGTH, 0);
            var t = 0;
            matchRules.forEach(function (_a, pos) {
                var label = _a.label, name = _a.name, next = _a.next;
                if (!formatStr.match(label)) {
                    t += dur[name] * next;
                    return;
                }
                if (!visited[pos]) {
                    dates[pos] = t + dur[name];
                    t = 0;
                    visited[pos] = true;
                }
            });
            var matches = {
                Y: String(dates[YEARS]),
                M: utils_1.default.z(dates[MONTHS]),
                MM: utils_1.default.z(dates[MONTHS]),
                D: String(dates[DAYS]),
                DD: utils_1.default.z(dates[DAYS]),
                H: String(dates[HOURS]),
                HH: utils_1.default.z(dates[HOURS]),
                m: String(dates[MINUTES]),
                mm: utils_1.default.z(dates[MINUTES]),
                s: String(dates[SECONDS]),
                ss: utils_1.default.z(dates[SECONDS]),
                SSS: utils_1.default.z(dates[MILLISECONDS], 3),
            };
            // replace $1
            return formatStr.replace(REGEX_FORMAT, function (match, $1) { return $1 || matches[match]; });
        },
    };
};
