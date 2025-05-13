// composables/useParticles.ts
export const particlesInit = async (engine: any) => {
  const { loadFull } = await import("tsparticles")
  await loadFull(engine)
}
