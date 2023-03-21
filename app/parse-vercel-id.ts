export function parseVercelId(id: string | null) {
  console.log({ id });
  const parts = id?.split(":").filter(Boolean);
  if (!parts) {
    throw new Error('"x-vercel-id" header not present');
  }
  console.log({ parts });
  const proxyRegion = parts[0];
  const computeRegion = parts[parts.length - 2];
  console.log({ proxyRegion, computeRegion });
  return { proxyRegion, computeRegion }
}
