export const hey = message => {
  const trimmedMessage = message.trim();

  // Check for all caps
  if (
    trimmedMessage.replace(/[A-Z]/g).length !== trimmedMessage.length &&
    trimmedMessage.replace(/[a-z]/g).length === trimmedMessage.length
  ) {

    // Check ending with question mark
    if (trimmedMessage[trimmedMessage.length - 1] === '?') {
      return "Calm down, I know what I'm doing!";
    }
    return 'Whoa, chill out!';
  }

  // Check ending with question mark
  if (trimmedMessage[trimmedMessage.length - 1] === '?') {
    return 'Sure.';
  }

  // Check if all whitespace
  if (trimmedMessage.length === 0) {
    return 'Fine. Be that way!';
  }

  return 'Whatever.';
};
