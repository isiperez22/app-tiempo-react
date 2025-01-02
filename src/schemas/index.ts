import z from "zod";

export const tiempoSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number()
  })
})

export type Tiempo = z.infer<typeof tiempoSchema>