import { z } from "zod";

const schema = z.object({
  title: z.string().min(3).max(300),
  content: z.string().min(3),
});

export default schema;