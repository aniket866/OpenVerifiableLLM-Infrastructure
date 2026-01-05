import dns from "dns/promises";

async function hasMX(domain) {
  try {
    const records = await dns.resolveMx(domain);
    return records.length > 0;
  } catch {
    return false;
  }
}
