export function parseVercelId(id: string | null) {
  const parts = id?.split(":").filter(Boolean);
  if (!parts) {
    throw new Error('"x-vercel-id" header not present');
  }
  const proxyRegion = parts[0];
  const computeRegion = parts[parts.length - 2];
  return { proxyRegion, computeRegion }
}
