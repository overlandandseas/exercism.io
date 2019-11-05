package gigasecond

import "time"

// Adds one Gigasecond (1000000000 seconds) to the given time
func AddGigasecond(t time.Time) time.Time {
	seconds, err := time.ParseDuration("1000000000s")
	if (err != nil) {
		panic(err)
	}
	return t.Add(seconds)
}
