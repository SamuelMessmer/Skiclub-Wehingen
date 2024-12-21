import { z } from "zod";

const schema = z.object({
  title: z.string().min(3).max(300),
  content: z.string().min(3),
  img: z.string(),
});

export default schema;