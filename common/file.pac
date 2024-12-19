function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.chatgpt.com") || shExpMatch(host, "*.openai.com") || shExpMatch(host, "*.oaiusercontent.com") || shExpMatch(host, "*.oaistatic.com") || shExpMatch(host, "*.ggpht.com")) { return "PROXY 127.0.0.1:31964"; }
  return "DIRECT";
}
