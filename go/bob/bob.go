package bob

import (
	"regexp"
	"strings"
)

func Hey(remark string) string {
	str := strings.TrimSpace(remark)
	if str == "" {
		return "Fine. Be that way!"
	}

	hasLetters, _ := regexp.MatchString("[A-Z]", str)
	isQuestion := strings.HasSuffix(str, "?")
	if hasLetters && str == strings.ToUpper(str) {
		if isQuestion {
			return "Calm down, I know what I'm doing!"
		}

		return "Whoa, chill out!"
	}

	if isQuestion {
		return "Sure."
	}

	return "Whatever."
}
